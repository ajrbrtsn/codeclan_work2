package com.codeclan.example.coursebooking.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "date")
    private String date;


    @ManyToOne
    @JsonIgnoreProperties({"booking"})
        @JoinTable( //should be join coloumn and not join table
                name="customer_bookings", //should be customer_id
                joinColumns = {@JoinColumn(
                        name="bookings_id",
                        nullable = false,
                        updatable = true
                )},
                inverseJoinColumns = {@JoinColumn(
                        name="customer_id",
                        nullable = false,
                        updatable = false //not needed
                )}
        )

    @ManyToOne
    @JoinTable( //should be join column
            name="course_bookings", //should be course_id
            joinColumns = {@JoinColumn(
                    name="bookings_id",
                    nullable = false,
                    updatable = true
            )},
            inverseJoinColumns = {@JoinColumn(
                    name="course_id",
                    nullable = false,
                    updatable = false
            )}
    )

    // should have instance of customer and course

    public Booking(String date) { //should have instance of customer and course

        this.date = date;
    }

    public Booking(){

    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    //getter and setter for customer and course
}
