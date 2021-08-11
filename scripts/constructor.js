import container from './domloader.js';

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.print = `<div><span>"${this.title}" </span> by
    <span>${this.author} </span></div>`;
}

class Library {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('AwesomeBooks')) || [];
  }

  save() {
    localStorage.setItem('AwesomeBooks', JSON.stringify(this.list));
  }

  addBook(title, author) {
    this.list.push(new Book(title, author));
    this.save();
    this.render();
  }

  deleteBook(index) {
    this.list.splice(index, 1);
    this.save();
    this.render();
  }

  render() {
    container.innerHTML = '';
    const booksContainer = document.createElement('ul');
    booksContainer.classList.add('books-list');

    this.list.forEach((book, index) => {
      const bookEntry = document.createElement('li');
      bookEntry.classList.add('bookEntry');
      bookEntry.innerHTML = book.print;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Delete';
      removeButton.addEventListener('click', (event) => {
        this.deleteBook(index);
        event.preventDefault();
      });
      bookEntry.appendChild(removeButton);
      booksContainer.appendChild(bookEntry);
    });
    container.appendChild(booksContainer);
  }
}

const myLibrary = new Library();

export default myLibrary;
