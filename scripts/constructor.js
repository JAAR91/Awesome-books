function Book(title, author) {
  this.title = title;
  this.author = author;
}

function Library() {
  this.list = [];
  this.load = () => {
    this.list = JSON.parse(localStorage.getItem('AwesomeBooks'));
    if (this.list === null) {
      this.list = [];
    }
  };
  this.save = () => {
    localStorage.setItem('AwesomeBooks', JSON.stringify(this.list));
  };
  this.new = (title, author) => {
    this.list.push(new Book(title, author));
  };
}

const myLibrary = new Library();

export default myLibrary;