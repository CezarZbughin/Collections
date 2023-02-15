package com.czmp.collections.controller;

import com.czmp.collections.dto.EndUserDTO;
import com.czmp.collections.model.ChatMessage;
import com.czmp.collections.model.EndUser;
import com.czmp.collections.repository.EndUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class EndUserController {
    @Autowired
    EndUserRepository endUserRepository;

    @GetMapping(value ="/endUsers/dummy")
    public EndUser getDummy(){
        return new EndUser("root", "root", new ArrayList<>());
    }

    @GetMapping(value ="/endUsers")
    public List<EndUser> getAll(){
        return endUserRepository.findAll();
    }

    @PostMapping(value ="/endUsers/save")
    public void save(@RequestBody EndUserDTO endUserDTO){
        EndUser endUser = new EndUser();
        endUser.setUsername(endUserDTO.getUsername());
        endUser.setPassword(endUserDTO.getPassword());
        endUser.setCollections(new ArrayList<>());
        endUserRepository.save(endUser);
    }
}
