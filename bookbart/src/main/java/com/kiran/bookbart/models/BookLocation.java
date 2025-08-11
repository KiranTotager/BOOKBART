package com.kiran.bookbart.models;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

@Entity
@Table(name = "booksLocation")
@FieldDefaults(level = AccessLevel.PRIVATE)
@AllArgsConstructor
@NoArgsConstructor
@Data
public class BookLocation {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    long id;
    @Column(name = "state",nullable = false)
    String state;
    @Column(name = "district" ,nullable = false)
    String district;
    @Column(name = "city",nullable = false)
    String city;
    @Column(name = "pinCode",nullable = false)
    String pinCode;
    @OneToOne(mappedBy = "bookLocation")
    BookDetails bookDetails;
}
