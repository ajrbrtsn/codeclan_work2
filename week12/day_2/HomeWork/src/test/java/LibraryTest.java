import org.junit.Before;
import org.junit.Test;

import java.awt.print.Book;

import static org.junit.Assert.assertEquals;

public class LibraryTest {

    public Library library;
    public Books books;

    @Before
    public void before(){
        books = new Books ("Lord of the Rings", "J.R.R.Tolkien", "Facts");
    }

    @Test
    public void canGetNumberOfBooks(){
        assertEquals(0, library.canGetNumberOfBooks());
    }



}
