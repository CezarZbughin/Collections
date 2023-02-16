package com.czmp.collections.controller;

import com.czmp.collections.dto.CollectionDTO;
import com.czmp.collections.dto.ItemDTO;
import com.czmp.collections.model.Item;
import com.czmp.collections.model.ItemCollection;
import com.czmp.collections.model.EndUser;
import com.czmp.collections.repository.CollectionRepository;
import com.czmp.collections.repository.EndUserRepository;
import com.czmp.collections.service.CollectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class CollectionController {
    @Autowired
    CollectionRepository collectionRepository;
    @Autowired
    EndUserRepository endUserRepository;
    @Autowired
    CollectionService collectionService;

    @GetMapping(value ="/collection/all")
    public List<ItemCollection> getAll() {
        return collectionRepository.findAll();
    }

    @PostMapping(value ="/collection/save")
    @ResponseBody
    public ResponseEntity<?> save(Principal principal, @RequestBody CollectionDTO collectionDTO) {
        ItemCollection collection = new ItemCollection();
        collection.setName(collectionDTO.getName());
        collection.setDescription( collectionDTO.getDescription());
        collection.setTags(collectionDTO.getTags());
        collection.setItems(new ArrayList<>());

        Optional<EndUser> user = endUserRepository.findByUsername(principal.getName());
        collectionService.userAddCollection(user.get(), collection);
        return new ResponseEntity<>("Collection added successfully to " + user.get().getUsername(), HttpStatus.OK);
    }

}
