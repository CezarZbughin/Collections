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
public class Collection extends IdentityModel<Long>{
    private String name;
    private String description;

    @ManyToOne
    @JoinColumn(name = "end_user_id")
    private EndUser endUser;

    @OneToMany(mappedBy = "collection")
    private List<Item> items;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "collection_has_tag",
            joinColumns = @JoinColumn(name = "collection_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    private List<Tag> tags;
}
