package com.codeclan.example.coursebooking.models;

import com.codeclan.example.coursebooking.models.Booking;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;


//missing entity and table
public class Customer {
    @Column(name="name")

    private String name;
    @Column(name = "town")
    private String town;
    @Column(name = "age")
    private int age;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonBackReference
    @OneToMany(mappedBy = "customer")
    private List<Booking> bookings;

    public Customer(String name, String town, int age) {
        this.name = name;
        this.town = town;
        this.age = age;
    }// missing an instance of bookings

    //missing an empty constructor

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
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

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
