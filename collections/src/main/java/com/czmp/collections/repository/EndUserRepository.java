package com.czmp.collections.repository;

import com.czmp.collections.model.EndUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EndUserRepository extends JpaRepository<EndUser, Long> {
}
