package com.kiran.bookbart.repositories;

import com.kiran.bookbart.models.BookDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookDetailsRepo extends JpaRepository<BookDetails,Long> {
}
