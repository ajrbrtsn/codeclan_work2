import java.util.ArrayList;

public class River {

    private ArrayList<Salmon> fish;

    public River(){
        this.fish = new ArrayList<>();
    }

    public void addFish(Salmon salmon) {
        this.fish.add(salmon);
    }

    public int fishCount() {
        return this.fish.size();
    }

    public Salmon removeFish() { //have to state of type method returns  e.g returns a Salmon
        return this.fish.remove(0);
    }
}
