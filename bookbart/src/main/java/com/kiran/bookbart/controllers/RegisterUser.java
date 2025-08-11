package com.kiran.bookbart.controllers;

import com.kiran.bookbart.dtos.AuthenticationRequest;
import com.kiran.bookbart.models.UserDetail;
import com.kiran.bookbart.services.UserRegistration;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@FieldDefaults(level = AccessLevel.PRIVATE)
public class RegisterUser {
    @Autowired
    UserRegistration userRegistration;
    @CrossOrigin(origins = "*")
    @PostMapping("/authenticate/register")
    public ResponseEntity<Map<String,String>> registerUser(@RequestBody UserDetail userDetail){
        boolean status=userRegistration.saveUser(userDetail);
        if(status){
            return new ResponseEntity<>(Map.of("message","registered successfully"), HttpStatus.OK);
        }
        return new ResponseEntity<>(Map.of("message","registration failed"),HttpStatus.CONFLICT);
    }
}
