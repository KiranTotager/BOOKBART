package com.kiran.bookbart.repositories;

import com.kiran.bookbart.models.UserDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<UserDetail,Long> {
    public UserDetail findByName(String name);
    public UserDetail findByEmail(String email);
}
