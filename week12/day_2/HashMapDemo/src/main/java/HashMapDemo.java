import java.util.HashMap;

public class HashMapDemo {

    public static void main (String[] args){

        HashMap favouriteFruits = new HashMap<>();
        favouriteFruits.put("Alice", "Apple");
        favouriteFruits.put("Sarah", "Banana");
        favouriteFruits.put("Bob", "Strawberry");


        System.out.println(favouriteFruits.get("Alice"));

        HashMap <String, Integer> ages = new HashMap<>();
        ages.put("Alice", 32);
        ages.put("Bob", 24);

        Integer aliceAge = ages.get("Alice");

        favouriteFruits.put("key", "value"); // adds to map
        favouriteFruits.get("Alice"); //gets value
        favouriteFruits.size() //return size of map as int
        favouriteFruits.clear(); // clears all entries from map
        favouriteFruits.containsKey("Alice"); //return true if key in HashMap
        favouriteFruits.containsValue("50"); // return true if contains Value in map
        favouriteFruits.remove(key);
    }

}
