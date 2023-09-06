import {BookCreateType} from './types.js';

const books: BookCreateType[] = [];

const booksWrapper: HTMLDivElement = document.createElement('div');
booksWrapper.setAttribute('class', 'books-wrapper');
document.body.append(booksWrapper);

const displayBooks = ()=>{
    booksWrapper.innerHTML = '';
    books.forEach((book)=>{
        const bookWrapper: HTMLDivElement = document.createElement('div');

        const bookTitle: HTMLDivElement = document.createElement('div');
        bookTitle.innerHTML = `<strong>Title:</strong> ${book.title}`;

        const bookAuthor: HTMLDivElement = document.createElement('div');
        bookAuthor.innerHTML = `<strong>Author:</strong> ${book.author}`;

        const bookPublicationYear: HTMLDivElement = document.createElement('div');
        bookPublicationYear.innerHTML = `<strong>Published:</strong> ${book.publicationYear.toString()}`; //!!!
        
        const bookGenre: HTMLDivElement = document.createElement('div');
        bookGenre.innerHTML = `<strong>Genre:</strong> ${book.genre}`;

        const bookISBN: HTMLDivElement = document.createElement('div');
        bookISBN.innerHTML = `<strong>ISBN:</strong> ${book.ISBN}`;

        bookWrapper.append(bookTitle, bookAuthor, bookPublicationYear, bookGenre, bookISBN);

        booksWrapper.append(bookWrapper);
    });
};

const createBook = ()=>{
    const titleInput: HTMLInputElement = document.querySelector("input[id='title']")!;
    const authorInput: HTMLInputElement = document.querySelector("input[id='author']")!;
    const publicationYearInput: HTMLInputElement = document.querySelector("input[id='publication-year']")!;
    const genreInput: HTMLInputElement = document.querySelector("input[id='genre']")!;
    const ISBNInput: HTMLInputElement = document.querySelector("input[id='ISBN']")!;

    const book: BookCreateType = {
        title: titleInput.value,
        author: authorInput.value,
        publicationYear: Number(publicationYearInput.value),
        genre: genreInput.value,
        ISBN: ISBNInput.value,
    };

    return book;
};

export const addBook = ()=>{
    const book = createBook();
    books.push(book);
    console.log(books);
    displayBooks();
};