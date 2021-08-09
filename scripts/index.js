import container, { newBookTitle, newBookAuthor, newBookButton } from './domloader.js';
import myLibrary from './constructor.js';

myLibrary.load();

const loadBooks = () => {
  container.innerHTML = '';

  myLibrary.list.forEach((book, index) => {
    const removeButton = document.createElement('button');
    const innerDiv = document.createElement('div');

    removeButton.addEventListener('click', (event) => {
      myLibrary.list.splice(index, 1);
      loadBooks();
      event.preventDefault();
    });

    removeButton.textContent = 'Remove';

    innerDiv.innerHTML += `
            <p>Title: ${book.title} </p>
            <p>Author: ${book.author} </p>`;
    innerDiv.appendChild(removeButton);
    container.appendChild(innerDiv);
  });
  myLibrary.save();
};

newBookButton.addEventListener('click', (event) => {
  myLibrary.new(newBookTitle.value, newBookAuthor.value);
  newBookTitle.value = '';
  newBookAuthor.value = '';
  loadBooks();
  event.preventDefault();
});

loadBooks();
