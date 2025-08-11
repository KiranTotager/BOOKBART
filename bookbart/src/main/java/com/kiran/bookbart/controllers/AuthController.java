package com.kiran.bookbart.controllers;

import com.kiran.bookbart.Components.JwtUtil;
import com.kiran.bookbart.dtos.AuthenticationRequest;
import com.kiran.bookbart.dtos.AuthenticationResponse;
import com.kiran.bookbart.services.UserDetailServiceImpl;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.http.SameSiteCookies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin("*")
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    UserDetailServiceImpl userDetailService;
    @Value("${jwt.cookie.name}")
    private  String cookieName;
    @Value("${jwt.cookie.expiration}")
    private int expirationTime;
    @PostMapping("/authenticate/login")
    public ResponseEntity<Map<String,String>> createToken(@RequestBody AuthenticationRequest authenticationRequest, HttpServletResponse httpServletResponse){
        log.info("authentication the user");
        try{
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getUserName(),authenticationRequest.getPassword()));
            final String token=jwtUtil.generateToken(authenticationRequest.getUserName());
            ResponseCookie cookie=ResponseCookie.from(cookieName,token)
                    .httpOnly(true)
                    .secure(true)
                    .path("/")
                    .maxAge(expirationTime)
                    .sameSite(SameSiteCookies.STRICT.toString())
                    .build();
            log.info("in the authcontroller");
            httpServletResponse.addHeader(HttpHeaders.SET_COOKIE,cookie.toString());
            return new ResponseEntity<>(Map.of("authToken",token),HttpStatus.OK);
        } catch (AuthenticationException e) {
            log.info("in the authcontroller exception"+e.getMessage());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }


    }
}
