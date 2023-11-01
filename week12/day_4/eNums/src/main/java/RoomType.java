public enum RoomType {

    SINGLE(1),
    DOUBLE(2),
    TRIPLE(3),
    FAMILY(4);

    private final String

    RoomType(int value) {
        this.value = value;
    }

    public int getValue() {
        return this.value;
    }
}
