package Flights;

public class Plane {

    private String name;

    private int capacity;
    private int totalWeight;

    public Plane(String name, int capacity, int totalWeight) {
        this.name = name;
        this.capacity = capacity;
        this.totalWeight = totalWeight;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public int getTotalWeight() {
        return totalWeight;
    }

    public void setTotalWeight(int totalWeight) {
        this.totalWeight = totalWeight;
    }
}
