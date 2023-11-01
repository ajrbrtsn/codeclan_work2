import java.util.ArrayList;

public class Bus {

    private String destination;
    private Integer capacity;
    private ArrayList<Person> passengers;

    public Bus(String destination, Integer capacity) {
        this.destination = destination;
        this.capacity = capacity;
        this.passengers = new ArrayList<>();
    }

    public int getNumberOfPassengers() {
        return this.passengers.size();
    }

    public void addPassenger(BusStop busStop, Person person) {
        if(this.passengers.size() < this.capacity) {
            this.passengers.add(busStop.removePassenger(person));
           // return "Passenger added";
       // }else{
            //return "At capacity";
        }
    }

    public void removePassenger(Person person) {
        this.passengers.remove(person);
    }
}

