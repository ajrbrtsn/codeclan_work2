package com.codeclan.example.coursebooking.components;

import com.codeclan.example.coursebooking.models.Booking;
import com.codeclan.example.coursebooking.models.Course;
import com.codeclan.example.coursebooking.models.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.codeclan.example.coursebooking.repositories.BookingRepository;
import com.codeclan.example.coursebooking.repositories.CourseRepository;
import com.codeclan.example.coursebooking.repositories.CustomerRepository;

//@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    CourseRepository courseRepository;


    public DataLoader(){

    }

    public void run(ApplicationArguments args){
        Course Codeclan = new Course("Python", "Glasgow", 1);
        courseRepository.save(Codeclan);

        Course Codebase = new Course("JavaScript", "Edinburgh", 3);
        courseRepository.save(Codebase);

        Course Nerds = new Course("Java", "Aberdeen", 4);
        courseRepository.save(Nerds);

        Customer Ryan = new Customer("Ryan", "Milngavie", 29);
        customerRepository.save(Ryan);

        Customer Alan = new Customer("Alan", "Paisley", 33);
        customerRepository.save(Alan);

        Customer Melika = new Customer("Melika", "Erskine", 18);
        customerRepository.save(Melika);

        Booking Booking1 = new Booking("25-11-23");
        bookingRepository.save(Booking1);

        Booking Booking2 = new Booking("27-11-23");
        bookingRepository.save(Booking2);

        Booking Booking3 = new Booking("29-11-23");
        bookingRepository.save(Booking3);
    }


}
