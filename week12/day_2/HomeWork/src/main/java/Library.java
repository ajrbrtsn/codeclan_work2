import java.util.ArrayList;

public class Library {

    private Integer capacity;

    private ArrayList<Books> stockList;

    public Library(Integer capacity ){
        this.capacity = capacity;
        this.stockList = new ArrayList<>();
    }

    public Integer canGetNumberOfBooks() {
        return this.capacity;
    }
}
