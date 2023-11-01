import unittest

from src.drink import Drink

class TestDrink(unittest.TestCase):
    def setUp(self):
        self.drink_1= Drink("Latte", 2.50)

    def test_drink_has_name(self):
        self.assertEqual("Latte", self.drink_1.name)