export type BookType = {
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
    ISBN: string;
    id: string;
};

export type BookCreateType = Omit<BookType, 'id'>;

export type BookUpdateType = Pick<BookType, 'title' | 'author'>;

export type BookIdType = BookType['id'];

export type BookOptionalType = Partial<BookType>;