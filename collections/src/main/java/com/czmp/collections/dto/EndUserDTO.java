package com.czmp.collections.dto;

import com.czmp.collections.model.Collection;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.OneToMany;
import java.util.List;

@Setter
@Getter
public class EndUserDTO {
    private String username;
    private String password;

}
