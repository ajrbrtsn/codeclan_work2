package People;

public enum Rank {

    CAPTAIN("Captain"),
    firstOFFICER("First Officer"),
    PURSER("Purser"),
    flightATTENDANT("Flight Attendant"),
    ;

    private String rank;

    Rank(String rank) {
        this.rank = rank;
    }

    public String getRank() {
        return rank;
    }
}

