import container, { newBookTitle, newBookAuthor, newBookButton } from './domloader.js';
import myLibrary from './constructor.js';

const loadBooks = () => {
    container.innerHTML = ``;

    myLibrary.list.forEach((book, index) => {
        let removeButton = document.createElement("button");
        let innerDiv = document.createElement("div");

        removeButton.addEventListener('click', (event) => {
            myLibrary.list.splice(index, 1);
            loadBooks();
        });
        removeButton.textContent = 'Remove';

        innerDiv.innerHTML += `
            <p>Title: ${book.title} </p>
            <p>Author: ${book.author} </p>`;
        innerDiv.appendChild(removeButton);
        container.appendChild(innerDiv);
    });
};

newBookButton.addEventListener('click', (event) => {
    // stop form submission
    myLibrary.new(newBookTitle.value, newBookAuthor.value);
    loadBooks();

    event.preventDefault();
});

myLibrary.new('harry potter', 'J K Rowling');
myLibrary.new('lords of the rings', 'Tolkien');

console.log(myLibrary);

loadBooks();


