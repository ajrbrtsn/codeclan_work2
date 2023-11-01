import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BusTest {

    public Bus bus;
    public Person person;
    public BusStop busStop;

    @Before    //SCOPED TO WHOLE FILE, OUTSIDE OF TESTS
    public void before(){
        bus = new Bus("Easterhouse", 2);
        person = new Person();
        busStop = new BusStop("Cumbernauld");
    }

    @Test
    public void canGetNumberOfPassengers(){
        assertEquals(0, bus.getNumberOfPassengers());
    }

    @Test
    public void addPassenger(){
        bus.addPassenger(busStop, person);
        assertEquals(1, bus.getNumberOfPassengers());
    }

    @Test
    public void doesNotAddPassengerIfAtCapacity(){
        bus.addPassenger(busStop, person);
        bus.addPassenger(busStop, person);
        bus.addPassenger(busStop, person);
        assertEquals(2, bus.getNumberOfPassengers());
    }

    @Test
    public void canRemovePassenger(){
        bus.addPassenger(busStop, person);
        bus.addPassenger(busStop, person);
        bus.removePassenger(person);
        assertEquals(1, bus.getNumberOfPassengers());
    }



}
