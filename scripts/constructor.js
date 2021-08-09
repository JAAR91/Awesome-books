function Book(title, author){
    this.title = title;
    this.author = author;
}

function Library(){
    this.list = [];
    this.new = (title,author) => {
        this.list.push(new Book(title, author))
    };
}

const myLibrary = new Library();

export default myLibrary;