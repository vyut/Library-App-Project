export interface Book {
    id: number;
    title: string;
    isbn: string;
    category: string;
    authorId: number;
}

export interface PageBook {
    count: number;
    books: Book[];
}
