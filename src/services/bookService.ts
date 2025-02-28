import { Book, PrismaClient } from "@prisma/client";
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

export function getBookByISBN(isbn: string): Promise<Book | null> {
    return bookRepository.getBookByISBN(isbn);
}

export function addBook(newBook: Omit<Book, 'id'>): Promise<Book> {
    return bookRepository.addBook(newBook);
}

