public class Runner {

    public static void main(String[] args){
        Planet planet = new Planet("Mars", 908973);
        System.out.println(planet.getName());
        System.out.println(planet.getSize());
        System.out.println(planet.explode());
    }
}
