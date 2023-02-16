package com.czmp.collections.controller;

import com.czmp.collections.dto.ItemDTO;
import com.czmp.collections.model.Item;
import com.czmp.collections.repository.ItemRepository;
import com.czmp.collections.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.function.EntityResponse;

import java.util.List;

@RestController
public class ItemController {
    @Autowired
    ItemRepository itemRepository;
    @Autowired
    ItemService itemService;

    @GetMapping(value ="/item/all")
    public List<Item> getAll(){
        return itemRepository.findAll();
    }

    @PostMapping(value ="/item/save")
    public ResponseEntity<?> save(@RequestBody ItemDTO itemDTO){
        Item item = new Item();
        item.setName(itemDTO.getName());
        item.setDescription(itemDTO.getDescription());
        item.setStatus(itemDTO.getStatus());
        item.setTags(itemDTO.getTags());
        itemService.save(item);
        return new ResponseEntity<>("Item added successfully", HttpStatus.OK);
    }


}

