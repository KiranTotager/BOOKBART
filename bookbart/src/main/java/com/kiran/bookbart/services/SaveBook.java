package com.kiran.bookbart.services;

import com.kiran.bookbart.Components.NoUserExistException;
import com.kiran.bookbart.dtos.PostBook;
import com.kiran.bookbart.models.BookDetails;
import com.kiran.bookbart.models.BookLocation;
import com.kiran.bookbart.models.UserDetail;
import com.kiran.bookbart.repositories.BookDetailsRepo;
import com.kiran.bookbart.repositories.BookLocationRepo;
import com.kiran.bookbart.repositories.UserRepo;
import jakarta.transaction.Transactional;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;

@Service
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SaveBook {
    @Autowired
    BookDetailsRepo bookDetailsRepo;
    @Autowired
    BookLocationRepo bookLocationRepo;
    @Autowired
    UserRepo userRepo;
    @Value("${upload.path}")
    String path;
    @Transactional
    public void saveBook(PostBook postBook, MultipartFile image) throws NoUserExistException,IOException{
        //getting user detail from the context holder
       try{
           Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
           String email=authentication.getName();
           BookDetails bookDetails=new BookDetails();
           BookLocation bookLocation=new BookLocation();
           UserDetail userDetail=userRepo.findByEmail(email);
           if(userDetail==null){
               throw new NoUserExistException("User not exist with email id"+email);
           }

           //to save the location
           bookLocation.setCity(postBook.getCity());
           bookLocation.setDistrict(postBook.getDistrict());
           bookLocation.setState(postBook.getState());
           bookLocation.setPinCode(postBook.getPinCode());
           //to get the user from database

           bookDetails.setUserDetail(userDetail);
           bookDetails.setBookLocation(bookLocation);
           bookDetails.setBookName(postBook.getBookName());
           bookDetails.setCategory(postBook.getCategory());
           bookDetails.setDescription(postBook.getDescription());
           bookDetails.setAvailabilityMode(postBook.getAvailabilityMode());
           bookDetails.setPrice(postBook.getPrice());
           bookDetails.setUploadedDate(LocalDate.now());
           bookDetails.setPath(this.path.concat(image.getOriginalFilename()));
           image.transferTo(new File(this.path.concat(image.getOriginalFilename())));

           bookDetailsRepo.save(bookDetails);
       }catch(NoUserExistException e){
           log.error("error while storing the book detail and image");
           throw e;
       }catch(IOException fileError){
           log.error("error while storing the image",image.getOriginalFilename());
           throw fileError;
       }

    }

}
