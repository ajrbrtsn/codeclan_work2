package com.codeclan.example.pirateservice;

import com.codeclan.example.pirateservice.models.Pirate;
import com.codeclan.example.pirateservice.models.Raid;
import com.codeclan.example.pirateservice.models.Ship;
import com.codeclan.example.pirateservice.repositories.PirateRepository;
import com.codeclan.example.pirateservice.repositories.RaidRepository;
import com.codeclan.example.pirateservice.repositories.ShipRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest
class PirateserviceApplicationTests {

	@Autowired
	PirateRepository pirateRepository;
	@Autowired
	ShipRepository shipRepository;

	@Autowired
	RaidRepository raidRepository;

	@Test
	void contextLoads(){
	}

	@Test
	public void canFindPiratesOver30() {
		List<Pirate> found = pirateRepository.findByAgeGreaterThan(30);
		assertTrue(found.size() > 0);
	}

	@Test
	public void findRaidByLocation(){
		List<Raid> found = raidRepository.findRaidByName("Tortuga");
		assertEquals("Tortuga", found.get(0).getName());
	}

	@Test
	public void findPiratesByRaidId(){
		List<Pirate> foundPirates = pirateRepository.findByRaidsId(1L);  //L specifies Long id
		assertEquals(1, foundPirates.size());
		assertEquals("Jack", foundPirates.get(0).getFirstName());
	}

	@Test
	public void canFindShipsByPiratesFirstName() {
		List<Ship> foundShips = shipRepository.findByPiratesFirstName("Maggie");
		assertEquals(17, foundShips.size());
	}

	@Test
	public void canFindAllRaidsByPirateShip(){
		Ship foundShip = shipRepository.getOne(3L);
		List<Raid> foundRaids = raidRepository.findByPiratesShip(foundShip);
		assertEquals(0, foundRaids.size());
	}
}

