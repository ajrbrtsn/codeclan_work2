import org.junit.Before;

public class RoomTest {

    private Bedroom bedroom;
    private ConferenceRoom confRoom;

    @Before
    public void before(){
        bedroom = new Bedroom(RoomType.DOUBLE.getCapacity(), RoomType.DOUBLE, 101);
        confRoom = new ConferenceRoom(RoomType.CONF.getCapacity(), RoomType.CONF, "Glasgow");
    }
}
