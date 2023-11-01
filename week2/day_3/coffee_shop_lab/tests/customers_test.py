import unittest
from src.customers import Customers
from src.drink import Drink

class TestCustomer(unittest.TestCase):
    def setUp(self):
        self.customer_1 = Customers("Alan", 50, 17)
        self.drink_1= Drink("Latte", 2.50)

    def test_customer_has_name(self):
        self.assertEqual("Alan", self.customer_1.name)

    def test_payment(self):
        self.customer_1.payment(self.drink_1.price)
        self.assertEqual(self.customer_1.wallet, 47.5)
