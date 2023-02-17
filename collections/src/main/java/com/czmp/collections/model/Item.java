package com.czmp.collections.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
public class Item extends IdentityModel<Long> {
    public enum Status {FOR_SALE, NOT_FOR_SALE};
    private String name;
    private String description;
    private Status status;

    @ManyToOne
    @JoinColumn(name = "collectionId")
    @JsonManagedReference
    @JsonIdentityReference(alwaysAsId=true)
    private ItemCollection collection;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "item_has_tag",
            joinColumns = @JoinColumn(name = "item_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    private List<Tag> tags;

    @ManyToMany(mappedBy = "likedItems")
    @JsonIdentityReference(alwaysAsId=true)
    List<EndUser> likes;
}
