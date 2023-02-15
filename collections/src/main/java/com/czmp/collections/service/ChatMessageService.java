package com.czmp.collections.service;

import com.czmp.collections.model.ChatMessage;
import com.czmp.collections.repository.ChatMessageRepository;
import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ChatMessageService {
    @Autowired
    private ChatMessageRepository chatMessageRepository;

    public ChatMessage getDummyMessage(){
        return new ChatMessage("This is the dummy text message", new Date(), null, null);
    }

    public List<ChatMessage> getAllMessages(){
        return chatMessageRepository.findAll();
    }

    public void saveChatMessage(ChatMessage chatMessage) {
        chatMessageRepository.save(chatMessage);
    }
}
