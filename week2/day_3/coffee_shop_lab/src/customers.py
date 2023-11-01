from src.drink import Drink

class Customers:
    def __init__(self, name, wallet, age):
        self.name = name
        self.wallet = wallet
        self.age = age

    def payment(self, price):
        self.wallet -= price

   
        

    