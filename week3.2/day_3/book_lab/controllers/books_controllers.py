from flask import Blueprint, render_template, request, redirect
from models.book import Book
from models.book_list import books

books_blueprint = Blueprint("books", __name__)

@books_blueprint.route("/")
def index():
    return render_template("index.html", title="Library")

@books_blueprint.route("/books")
def books_index():
    return render_template("books/index.html", books = books, title="Library")

@books_blueprint.route("/books/new")
def new_book():
    return render_template("books/new.html", title="Library")

@books_blueprint.route("/books/<index>")
def book_show(index):
    book = books[int(index)]
    return render_template("books/show.html", book=book, title="Library")

@books_blueprint.route("/books", methods=["Post"])
def create_book():
    title = request.form["title"]
    author = request.form["author"]
    genre = request.form ["genre"]
    checked_out = "checked_out" in request.form
    new_book = Book (title, author, genre, checked_out)
    books.append(new_book)
    return redirect("/books")

@books_blueprint.route("/books/delete/<index>", methods=["POST"])
def delete_book(index):
    book = books[int(index)]
    books.remove(book)
    return redirect("/books")

@books_blueprint.route("/books/<index>", methods=["POST"])
def update_book(index):
    book = books[int(index)]
    checked_out = "checked_out" in request.form
    book.checked_out = checked_out
    return redirect("/books/ + index")
