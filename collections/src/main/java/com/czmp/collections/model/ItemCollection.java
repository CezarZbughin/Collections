package com.czmp.collections.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class ItemCollection extends IdentityModel<Long>{
    private String name;
    private String description;

    @ManyToOne
    @JoinColumn(name = "end_user_id")
    @JsonManagedReference
    private EndUser endUser;

    @OneToMany(mappedBy = "collection")
    @JsonBackReference
    private List<Item> items;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "collection_has_tag",
            joinColumns = @JoinColumn(name = "collection_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    private List<Tag> tags;
}
