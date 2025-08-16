package com.kiran.bookbart.repositories;

import com.kiran.bookbart.models.BookLocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookLocationRepo extends JpaRepository<BookLocation,Long> {
}
