import Management.Director;
import Management.Manager;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class DirectorTest {

    Director director;

    @Before
    public void before() {
        director = new Director("Alan", "JW207261B", 50000, "SRE", 1000000);
    }

    @Test
    public void canGetBudget(){
        assertEquals(1000000, director.getBudget(), 0.1);
    }
}
