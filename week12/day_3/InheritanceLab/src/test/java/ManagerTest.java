import Management.Manager;
import Staff.Employee;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class ManagerTest {

        Manager manager;

        @Before
        public void before(){
            manager = new Manager ("Alan", "JW207261B", 50000, "SRE");
        }

        @Test
        public void canRaiseSalary(){
            manager.raiseSalary(1500);
            assertEquals(51500, manager.getSalary(), 0.1);
        }

        @Test
        public void canPayBonus(){
            assertEquals(500, manager.payBonus(), 0.1);
        }

        @Test
        public void canGetDept(){
            assertEquals("SRE", manager.getDeptName());
        }


}

