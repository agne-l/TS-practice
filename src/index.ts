import {addBook} from './actions.js';

const addBookButton: HTMLButtonElement = document.querySelector("button[id='add-book-btn']")!;

addBookButton.addEventListener('click', addBook);