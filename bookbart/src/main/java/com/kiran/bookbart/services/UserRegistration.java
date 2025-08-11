package com.kiran.bookbart.services;

import com.kiran.bookbart.models.UserDetail;
import com.kiran.bookbart.repositories.UserRepo;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserRegistration {
    @Autowired
    UserRepo userRepo;
    @Autowired
    PasswordEncoder passwordEncoder;
    public boolean saveUser(UserDetail userDetail){
        UserDetail DBuserDetail1=userRepo.findByEmail(userDetail.getEmail());
        if(DBuserDetail1==null){
            userDetail.setPassword(passwordEncoder.encode(userDetail.getPassword()));
            userRepo.save(userDetail);
            return true;
        }
        return false;
    }


}
