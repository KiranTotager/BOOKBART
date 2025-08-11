package com.kiran.bookbart.models;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.math.BigDecimal;

@Entity
@Table(name = "BooksDetail")
@AllArgsConstructor
@NoArgsConstructor
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    @Column(name = "bookName",nullable = false)
    String bookName;
    @Column(name = "availabilityMode",nullable = false)
    String availabilityMode;
    @Column(name = "price",columnDefinition = "DECIMAL(10,2) default 0.00")
    BigDecimal price;
    @Column(name = "bookCategory" ,nullable = false)
    String category;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "locationId",referencedColumnName = "id")
    BookLocation bookLocation;

    @ManyToOne
    @JoinColumn(name = "userId")
    UserDetail userDetail;
}
