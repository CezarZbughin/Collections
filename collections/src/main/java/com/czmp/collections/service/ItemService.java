package com.czmp.collections.service;

import com.czmp.collections.model.EndUser;
import com.czmp.collections.model.Item;
import com.czmp.collections.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public void save(Item item){
        itemRepository.save(item);
    }

    public List<Item> getUserFeed(EndUser endUser){
        //itemRepository.fin
        return null;
    }




}
