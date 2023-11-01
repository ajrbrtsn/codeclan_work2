import java.util.ArrayList;

public class Bear {

    private String name;
    private ArrayList<Salmon> belly;

    public Bear(String name) {
        this.name = name;
        this.belly = new ArrayList<Salmon>();
    }

    public int foodCount(){
        return this.belly.size();
    }

    public void eat(Salmon salmon) {
        this.belly.add(salmon);
    }

    public void shitInTheWoods() {
        this.belly.clear();
    }

    public void eatFishFromRiver(River river) { //single responsibility principle
        Salmon salmon = river.removeFish(); // 3 methods do 1 thing each not 1 method doing 3 things
        this.belly.add(salmon);
    }
}
