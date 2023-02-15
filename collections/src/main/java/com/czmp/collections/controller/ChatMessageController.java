package com.czmp.collections.controller;

import com.czmp.collections.dto.ChatMessageDTO;
import com.czmp.collections.model.ChatMessage;
import com.czmp.collections.model.Item;
import com.czmp.collections.service.ChatMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class ChatMessageController {
    @Autowired
    private ChatMessageService chatMessageService;

    @GetMapping(value = "/chatMessages/dummy")
    public ChatMessage getDummy(){
        return chatMessageService.getDummyMessage();
    }

    @GetMapping(value ="/chatMessages")
    public List<ChatMessage> getAll(){
        return chatMessageService.getAllMessages();
    }


    @PostMapping("/chatMessages/save")
    public void createChatMessage(@RequestBody ChatMessageDTO chatMessageDTO){
        ChatMessage chatMessage = new ChatMessage();
        chatMessage.setMessage(chatMessageDTO.getMessage());
        chatMessage.setSentDate(chatMessageDTO.getSentDate());
        chatMessage.setSender(chatMessageDTO.getSender());
        chatMessage.setReceiver(chatMessageDTO.getReceiver());
        chatMessageService.saveChatMessage(chatMessage);
    }

}
