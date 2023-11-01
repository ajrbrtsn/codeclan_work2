package com.codeclan.example.pirateservice.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="raids")
public class Raid {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    private String name;

    @Column(name = "loot")
    private int loot;
 @JsonBackReference  //instead of JsonIgnoreProperties
    @ManyToMany
    @JoinTable(
            name="pirates_raid",
            joinColumns = {@JoinColumn( //object or HashMap
                    name="raid_id",
                    nullable = false,
                    updatable = false
            )},
            inverseJoinColumns = {@JoinColumn(
                    name="pirate_id",
                    nullable = false,
                    updatable = false
            )}
    )

    private List<Pirate> pirates;

    public Raid(String name, int loot) {
        this.name = name;
        this.loot = loot;
        this.pirates = new ArrayList<>();
    }

    public Raid (){  //default constructor

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getLoot() {
        return loot;
    }

    public void setLoot(int loot) {
        this.loot = loot;
    }

    public List<Pirate> getPirates() {
        return pirates;
    }

    public void setPirates(List<Pirate> pirates) {
        this.pirates = pirates;
    }

    public void addPirate(Pirate pirate) { // takes in something of type Pirate called pirate
        this.pirates.add(pirate);
    }
}
