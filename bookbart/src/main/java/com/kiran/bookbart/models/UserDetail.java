package com.kiran.bookbart.models;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Entity
@Table(name = "user")
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDetail implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @Column(name = "name",nullable = false)
    String name;

    @Column(name = "password" ,nullable = false)
    String password;

    @Column(name = "email",nullable = false)
    String email;
    @Column(name = "phoneNumber",nullable = false)
    String phoneNumber;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "userDetail")
    List<BookDetails> bookDetails=new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.emptyList();

    }
    @Override
    public String getUsername() {
        return email;
    }
    @Override
    public String getPassword(){
        return password;
    }

}
