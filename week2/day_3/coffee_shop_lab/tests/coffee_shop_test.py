import unittest
from src.coffee_shop import CoffeeShop
from src.customers import Customers
from src.drink import Drink

class TestCoffeeShop(unittest.TestCase):
    
    def setUp(self):
        self.coffee_shop = CoffeeShop("The Prancing Pony", 100)
        self.drink1 = Drink("Latte", 3)
        self.customer1 = Customers("Alan", 50, 17)
    
    def test_coffee_shop_has_name(self):
        self.assertEqual("The Prancing Pony", self.coffee_shop.name)

    def test_increase_till(self):
        self.coffee_shop.increase_till(2.50)
        self.assertEqual(102.50, self.coffee_shop.till)

    def test_customer_age(self):
        self.assertEqual(self.customer_1.age)
        