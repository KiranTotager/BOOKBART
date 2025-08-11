package com.kiran.bookbart.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Data
@NoArgsConstructor
public class AuthenticationResponse {
    public AuthenticationResponse(String token){
        Map<String,String> authresponse=new HashMap<>();
        authresponse.put("authtoken",token);
    }

}
