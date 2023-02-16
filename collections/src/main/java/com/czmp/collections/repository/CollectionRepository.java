package com.czmp.collections.repository;

import com.czmp.collections.model.ItemCollection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectionRepository extends JpaRepository<ItemCollection, Long> {

}
