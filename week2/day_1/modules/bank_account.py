class BankAccount:

    def __init__(self, input_holder_name, input_balance, input_type, input_pin):
       self.holder_name  = input_holder_name
       self.balance = input_balance
       self.type = input_type
       self._pin = input_pin

    def pay_in(self, amount):
        self.balance += amount

    def pay_monthly_fee(self):
        if self.type == "business":
            self.balance -= 50
        elif self.type == "personal":
            self.balance -= 10


# self instructor in every class - self is an instruction to instance e.g your own bank account
# method = when a function can only be executed on a instance e.g. pay_in

# max(int) is a function
# bank_account.pay_in() is a method

#self._pin hides method

# class is a set of instructions
# object is an instance created by the instructions
