package com.czmp.collections.controller;

import com.czmp.collections.model.Item;
import com.czmp.collections.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {

    @GetMapping(value = "/items")
    public List<Item> getAgedWhite(){
        return List.of(new Item("Aged white tea 2020", "Aged tea from fujian province", Item.Status.FOR_SALE, null, null));
    }

}
