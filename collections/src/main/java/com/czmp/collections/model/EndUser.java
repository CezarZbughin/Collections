package com.czmp.collections.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Table(name = "end_user",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username")
        })
public class EndUser extends IdentityModel<Long> {
    private String username;
    private String password;

    @OneToMany(mappedBy = "endUser")
    private List<Collection> collections;
}
