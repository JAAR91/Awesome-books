import { newBookTitle, newBookAuthor, newBookButton, listBtn,
  newBookBtn, contactBtn, awesomeBooksList, bookInput, contactInfoSection } from './domloader.js';
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

listBtn.addEventListener('click', ()=> {
  awesomeBooksList.classList.remove('d-none');
  bookInput.classList.add('d-none');
  contactInfoSection.classList.add('d-none');
});

newBookBtn.addEventListener('click', ()=> {
  awesomeBooksList.classList.add('d-none');
  bookInput.classList.remove('d-none');
  contactInfoSection.classList.add('d-none');
});

contactBtn.addEventListener('click', ()=> {
  awesomeBooksList.classList.add('d-none');
  bookInput.classList.add('d-none');
  contactInfoSection.classList.remove('d-none');
});
