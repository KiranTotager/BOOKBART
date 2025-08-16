package com.kiran.bookbart.dtos;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class PostBook {
    String bookName;
    String availabilityMode;
    BigDecimal price ;
    String category ;
    String state ;
    String district ;
    String city;
    String pinCode ;
    String description;
}
