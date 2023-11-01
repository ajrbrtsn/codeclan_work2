package Staff;
public abstract class Employee {

    private String name;
    private String niNumber;
    double salary;

    public Employee(String name, String niNumber, double salary) {
        this.name = name;
        this.niNumber = niNumber;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNiNumber() {
        return niNumber;
    }

    public void setNiNumber(String niNumber) {
        this.niNumber = niNumber;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public void raiseSalary(double amount) {
        if (amount > 0) {
            this.salary += amount;
        }

    }

    public double payBonus() {
        return 0.01 * salary;
    }
}
