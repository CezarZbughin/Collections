package com.czmp.collections.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class Item extends IdentityModel<Long> {
    public enum Status {FOR_SALE, NOT_FOR_SALE};
    private String name;
    private String description;
    private Status status;

    @ManyToOne
    @JoinColumn(name = "collectionId")
    @JsonManagedReference
    private ItemCollection collection;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "item_has_tag",
            joinColumns = @JoinColumn(name = "item_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    private List<Tag> tags;

    @ManyToMany(mappedBy = "likedItems")
    List<EndUser> likes;
}
