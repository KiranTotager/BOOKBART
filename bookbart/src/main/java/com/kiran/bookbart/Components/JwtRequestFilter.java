package com.kiran.bookbart.Components;

import com.kiran.bookbart.services.UserDetailServiceImpl;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AccessLevel;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE)
public class JwtRequestFilter extends OncePerRequestFilter {
    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    UserDetailServiceImpl userDetailService;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    if(request.getServletPath().startsWith("/authenticate")){
        filterChain.doFilter(request,response);
        log.info("skiping the jwt authentication");
        return;
    }
    log.info("doing jwt filter  internally");
    final String authorizationHeader=request.getHeader("Authorization");
    String userName=null;
    String jwtToken=null;
    if(authorizationHeader!=null & authorizationHeader.startsWith("Bearer")){
        jwtToken=authorizationHeader.substring(7);
        userName=jwtUtil.extractUserName(jwtToken);
    }
    if(userName!=null && SecurityContextHolder.getContext().getAuthentication()==null){
        UserDetails userDetail=userDetailService.loadUserByUsername(userName);
        if(jwtUtil.validateToken(jwtToken,userName)){
            log.info("valid token");
            UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(userDetail,null,null);
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        }
    }
    filterChain.doFilter(request,response);
    }
}
