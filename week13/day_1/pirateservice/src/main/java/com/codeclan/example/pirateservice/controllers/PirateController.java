package com.codeclan.example.pirateservice.controllers;

import com.codeclan.example.pirateservice.models.Pirate;
import com.codeclan.example.pirateservice.repositories.PirateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PirateController {

    @Autowired //implement from db
    PirateRepository pirateRepository;

    //route to get all pirates
    @GetMapping(value="/pirates")
    //functions return ArrayList of Pirate objects
    public ResponseEntity <List<Pirate>> getAllPirates(){
        return new ResponseEntity<>(pirateRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/pirates/{id}")
    public Optional<Pirate> getPirate(@PathVariable Long id){
        return pirateRepository.findById(id);
    }

    @PostMapping(value="/pirates")
    public ResponseEntity<Pirate> postPirate(@RequestBody Pirate pirate){
        pirateRepository.save(pirate); // save to repository by passing in instance of pirate
        return new ResponseEntity<>(pirate, HttpStatus.CREATED);
    }
}
