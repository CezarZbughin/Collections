package com.czmp.collections.controller;

import com.czmp.collections.dto.EndUserDTO;
import com.czmp.collections.model.ChatMessage;
import com.czmp.collections.model.EndUser;
import com.czmp.collections.repository.EndUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class EndUserController {
    @Autowired
    EndUserRepository endUserRepository;

    @GetMapping(value ="/user/dummy")
    public EndUser getDummy(){
       return null;
    }

    @RequestMapping(value = "/user/self", method = RequestMethod.GET)
    @ResponseBody
    public String getSelf(Principal principal) {
        return "Current user is " + principal.getName() + ".";
    }

    @GetMapping(value ="/user/all")
    public List<EndUser> getAll(){
        return endUserRepository.findAll();
    }
}
