import { newBookTitle, newBookAuthor, newBookButton, listBtn,
  newBookBtn, contactBtn, awesomeBooksList, bookInput,
  contactInfoSection, DateTimeDisplay } from './domloader.js';
import myLibrary from './constructor.js';
import { DateTime } from "./luxon.js";

myLibrary.render();

newBookButton.addEventListener('click', () => {
  myLibrary.addBook(newBookTitle.value, newBookAuthor.value);
  newBookTitle.value = '';
  newBookAuthor.value = '';
  awesomeBooksList.classList.remove('d-none');
  bookInput.classList.add('d-none');
  contactInfoSection.classList.add('d-none');
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

const loadTime = () => {
  let dt = DateTime.now();
  DateTimeDisplay.textContent = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};

window.onload = function() { 
  var start = setInterval(loadTime, 100);
}


