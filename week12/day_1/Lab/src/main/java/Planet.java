public class Planet {

        private String name;

        private int size;

        public Planet(String name, int size){
            this.name = name;
            this.size = size;
        }

        public String getName(){
            return name;
        }

        public int getSize(){
            return size;
        }

        public String explode(){
            return ("Boom! {planet.name} has exploded.");
        }
}
