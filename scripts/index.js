import container from './domloader.js';
import myLibrary from './constructor.js';

const loadBooks = () => {
    container.innerHTML = ``;
    myLibrary.list.forEach(element => {
        container.innerHTML += `<div>
            <p>Title: ${element.title} </p>
            <p>Author: ${element.author} </p>
        </div>`;
    });
};


myLibrary.new('harry potter', 'J K Rowling');
myLibrary.new('lords of the rings', 'Tolkien');

console.log(myLibrary);

loadBooks();


