import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class BusStopTest {

    private BusStop busStop;
    private Person person;

    @Before
    public void before(){
        busStop = new BusStop("Easterhouse");
        person = new Person();
    }

    @Test
    public void canAddPassengerToQueue(){
        busStop.addPassenger(person);
        assertEquals(1, busStop.numberInQueue());
    }

    @Test
    public void canRemoverPassengerFromQueue(){
        busStop.addPassenger(person);
        busStop.removePassenger(person);
        assertEquals(0, busStop.numberInQueue());
    }
}
