package com.czmp.collections.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ChatMessage extends IdentityModel<Long>{
    private String message;
    private Date sentDate;

    @ManyToOne
    @JoinColumn(name = "sender_id")
    private EndUser sender;

    @ManyToOne
    @JoinColumn(name = "receiver_id")
    private EndUser receiver;
}