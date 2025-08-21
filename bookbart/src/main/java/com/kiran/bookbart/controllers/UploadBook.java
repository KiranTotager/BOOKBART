package com.kiran.bookbart.controllers;

import com.kiran.bookbart.Components.JwtUtil;
import com.kiran.bookbart.Components.NoUserExistException;
import com.kiran.bookbart.dtos.PostBook;
import com.kiran.bookbart.services.SaveBook;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;


@RestController
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UploadBook {
    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    SaveBook saveBook;
   @PostMapping(value = "/upload/books",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Map<String,String>> uploadBooks(@RequestPart("book") PostBook postBook, @RequestPart("file") MultipartFile image){
        try{
            if(!image.isEmpty()){
                return new ResponseEntity<>(Map.of("message"," image is missing"),HttpStatus.BAD_REQUEST);
            }
            if(!image.getContentType().equals("image/jpeg") || image.getSize()>1_00_000){
                return new ResponseEntity<>(Map.of("message","not a valid file"),HttpStatus.BAD_REQUEST);

            }
            saveBook.saveBook(postBook,image);
            return new ResponseEntity<>(Map.of("message","book uploaded successfully"),HttpStatus.OK);
        }catch (NoUserExistException e){
            return new ResponseEntity<>(Map.of("message",e.toString()),HttpStatus.BAD_REQUEST);
        }catch(IOException fileError){
            return new ResponseEntity<>(Map.of("message", fileError.getMessage()),HttpStatus.INTERNAL_SERVER_ERROR);
        }
        catch (Exception e){
            return new ResponseEntity<>(Map.of("message",e.toString()),HttpStatus.INTERNAL_SERVER_ERROR);

        }

   }

}
