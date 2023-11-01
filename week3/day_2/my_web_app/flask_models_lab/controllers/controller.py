from flask import render_template
from app import app
from models.order import Order

order_1 = Order ("Alan", "Today", 10)
order_2 = Order ("Cameron", "Yesterday", 20)

orders = [order_1, order_2]

@app.route('/orders')
def index():
    return render_template("index.html", title="Jabba the pizza hut", orders = orders)

@app.route('/orders/<index>')
def single_order(index):
    chosen_order = orders[int(index)]
    return render_template("order.html", order=chosen_order)
