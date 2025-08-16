package com.kiran.bookbart.controllers;

import com.kiran.bookbart.Components.JwtUtil;
import com.kiran.bookbart.Components.NoUserExistException;
import com.kiran.bookbart.dtos.PostBook;
import com.kiran.bookbart.services.SaveBook;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;


@RestController
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UploadBook {
    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    SaveBook saveBook;
   @PostMapping("/upload/books")
    public ResponseEntity<Map<String,String>> uploadBooks(@RequestBody PostBook postBook){
        try{
            saveBook.saveBook(postBook);
            return new ResponseEntity<>(Map.of("message","book uploaded successfully"),HttpStatus.OK);
        }catch (NoUserExistException e){
            return new ResponseEntity<>(Map.of("message",e.toString()),HttpStatus.BAD_REQUEST);
        }catch (Exception e){
            return new ResponseEntity<>(Map.of("message",e.toString()),HttpStatus.INTERNAL_SERVER_ERROR);

        }

   }

}
