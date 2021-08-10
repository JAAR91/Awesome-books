class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class Library {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('AwesomeBooks')) || [];
  };

  save() {
    localStorage.setItem('AwesomeBooks', JSON.stringify(this.list));
  };

  addBook(title, author) {
    this.list.push(new Book(title, author));
    this.save();
  };

  deleteBook(index) {
    this.list.splice(index, 1);
    this.save();
  }
}

const myLibrary = new Library();

export default myLibrary;