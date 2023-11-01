from src.drink import Drink
from src.customers import Customers

class CoffeeShop:
    def __init__(self, name, till):
        self.name = name
        self.till = till
        self.drinks = []
    
    def increase_till(self, amount):
        self.till += amount

    def find_coffee(self, coffee_name):
        for coffee in self.drinks:
            if coffee.name == coffee_name:
                return coffee

    def sell_drink(self, name, customer):
        if customer.age >= 16:
            coffee = self.find_by_name(name)
            customer.payment(coffee.price)
            self.increase_till(coffee.price)
        else:
            print("Sorry, you aren't old enough to buy a coffee")


            

