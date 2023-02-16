package com.czmp.collections.service;

import com.czmp.collections.model.ItemCollection;
import com.czmp.collections.model.EndUser;
import com.czmp.collections.repository.CollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CollectionService {
    @Autowired
    private CollectionRepository collectionRepository;

    public void userAddCollection(EndUser user, ItemCollection collection){
        collection.setEndUser(user);
        collectionRepository.save(collection);
    }
}
