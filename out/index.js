import { addBook } from './actions.js';
const addBookButton = document.querySelector("button[id='add-book-btn']");
addBookButton.addEventListener('click', addBook);
