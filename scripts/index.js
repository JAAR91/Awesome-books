import { newBookTitle, newBookAuthor, newBookButton } from './domloader.js';
import myLibrary from './constructor.js';

myLibrary.render();

newBookButton.addEventListener('click', () => {
  myLibrary.addBook(newBookTitle.value, newBookAuthor.value);
  newBookTitle.value = '';
  newBookAuthor.value = '';
});

const buttonDisabled = () => {
  if (newBookTitle.value !== '' && newBookAuthor.value !== '') {
    newBookButton.disabled = false;
  } else {
    newBookButton.disabled = true;
  }
};

newBookTitle.addEventListener('input', buttonDisabled);
newBookAuthor.addEventListener('input', buttonDisabled);
