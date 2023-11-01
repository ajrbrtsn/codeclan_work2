package com.codeclan.example.pirateservice.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.codeclan.example.pirateservice.models.Pirate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PirateRepository extends JpaRepository<Pirate, Long> {

    List<Pirate> findByAgeGreaterThan(int age);


    List<Pirate> findByRaidsId(Long id);

}
