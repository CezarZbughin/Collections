package com.czmp.collections.controller;

import com.czmp.collections.repository.TagRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TagController  {
    @Autowired
    private TagRepository tagRepository;

    @GetMapping(value = "/tag/all")
    ResponseEntity<?> getAll(){
        return ResponseEntity.ok(tagRepository.findAll());
    }
}
