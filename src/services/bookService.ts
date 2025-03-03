import { Book } from "../models/book";
import * as bookRepository from "../repository/bookRepositoryPrisma";

export function getAllBooks(): Promise<Book[]> {
    return bookRepository.getAllBooks();
}

export function getBookById(id: number): Promise<Book | null> {
    return bookRepository.getBookById(id);
}

export function getBooksByTitle(title: string): Promise<Book[]> {
    return bookRepository.getBooksByTitle(title);
}

export function getBooksByCategory(category: string): Promise<Book[]> {
    return bookRepository.getBooksByCategory(category);
}

export function getBookByISBN(isbn: string): Promise<Book | null> {
    return bookRepository.getBookByISBN(isbn);
}

export function addBook(newBook: Omit<Book, 'id'>): Promise<Book> {
    return bookRepository.addBook(newBook);
}

export async function getAllBooksWithAuthorPagination(keyword: string, pageSize: number, pageNo: number) {
    const pageBooks = await bookRepository.getAllBooksWithAuthorPagination(keyword, pageSize, pageNo);
    return pageBooks;
}

export function count() {
    return bookRepository.countBook();
}
