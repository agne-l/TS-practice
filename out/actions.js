const books = [];
const booksWrapper = document.createElement('div');
booksWrapper.setAttribute('class', 'books-wrapper');
document.body.append(booksWrapper);
const displayBooks = () => {
    booksWrapper.innerHTML = '';
    books.forEach((book) => {
        const bookWrapper = document.createElement('div');
        const bookTitle = document.createElement('div');
        bookTitle.innerHTML = `<strong>Title:</strong> ${book.title}`;
        const bookAuthor = document.createElement('div');
        bookAuthor.innerHTML = `<strong>Author:</strong> ${book.author}`;
        const bookPublicationYear = document.createElement('div');
        bookPublicationYear.innerHTML = `<strong>Published:</strong> ${book.publicationYear.toString()}`; //!!!
        const bookGenre = document.createElement('div');
        bookGenre.innerHTML = `<strong>Genre:</strong> ${book.genre}`;
        const bookISBN = document.createElement('div');
        bookISBN.innerHTML = `<strong>ISBN:</strong> ${book.ISBN}`;
        bookWrapper.append(bookTitle, bookAuthor, bookPublicationYear, bookGenre, bookISBN);
        booksWrapper.append(bookWrapper);
    });
};
const createBook = () => {
    const titleInput = document.querySelector("input[id='title']");
    const authorInput = document.querySelector("input[id='author']");
    const publicationYearInput = document.querySelector("input[id='publication-year']");
    const genreInput = document.querySelector("input[id='genre']");
    const ISBNInput = document.querySelector("input[id='ISBN']");
    const book = {
        title: titleInput.value,
        author: authorInput.value,
        publicationYear: Number(publicationYearInput.value),
        genre: genreInput.value,
        ISBN: ISBNInput.value,
    };
    return book;
};
export const addBook = () => {
    const book = createBook();
    books.push(book);
    console.log(books);
    displayBooks();
};
