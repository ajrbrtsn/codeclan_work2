from flask import Flask
from controllers.tasks_controller import tasks_blueprint

app = Flask(__name__)
app.register_blueprint(tasks_blueprint)

@app.route('/<name>')
def index (name):
    return f"<h1>{name}</h1>"