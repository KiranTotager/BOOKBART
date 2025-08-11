package com.kiran.bookbart.config;

import com.kiran.bookbart.Components.AppAuthenticationEntryPoint;
import com.kiran.bookbart.Components.CustomAccessDeniedHandler;
import com.kiran.bookbart.Components.CustomCorsConfiguration;
import com.kiran.bookbart.Components.JwtRequestFilter;
import com.kiran.bookbart.services.UserDetailServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.naming.AuthenticationException;

@Configuration
@Slf4j
public class WebSecurity {

    private final JwtRequestFilter jwtRequestFilter;
    private final UserDetailServiceImpl userDetailService;
    @Autowired
    CustomCorsConfiguration corsConfiguration;
    public WebSecurity(JwtRequestFilter jwtRequestFilter,UserDetailServiceImpl userDetailService){
        this.jwtRequestFilter=jwtRequestFilter;
        this.userDetailService=userDetailService;
    }
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        httpSecurity
                .cors(httpSecurityCorsConfigurer -> httpSecurityCorsConfigurer.configurationSource(corsConfiguration))
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(requests->requests
                        .requestMatchers(HttpMethod.POST,"/authenticate/**").permitAll()
                        .requestMatchers(HttpMethod.GET,"/books/**").permitAll()
                        .requestMatchers(HttpMethod.POST,"/upload").authenticated()

                ).addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class)
                .exceptionHandling(exceptionHandling->
                        exceptionHandling.authenticationEntryPoint(new AppAuthenticationEntryPoint()).
                        accessDeniedHandler(new CustomAccessDeniedHandler()));
        return httpSecurity.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider daoAuthenticationProvider=new DaoAuthenticationProvider();
        daoAuthenticationProvider.setUserDetailsService(userDetailService);
        daoAuthenticationProvider.setPasswordEncoder(passwordEncoder());
        return daoAuthenticationProvider;
    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception{
        return authenticationConfiguration.getAuthenticationManager();
    }

}
