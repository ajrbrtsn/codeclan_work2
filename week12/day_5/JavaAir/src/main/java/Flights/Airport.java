package Flights;

public enum Airport {

    GLASGOW("GLA"),
    EDINBURGH("EDI"),
    MUNICH("MUN"),
    IBIZA("IBZ"),
    ;

    private final String airportCode;

    Airport(String airportCode) {
        this.airportCode = airportCode;
    }

    public String getAirportCode() {
        return airportCode;
    }

}
