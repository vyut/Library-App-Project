import { PrismaClient } from "@prisma/client";
import * as bookRepository from "../repository/bookRepositoryPrisma";

export function getAllBooks() {
    return bookRepository.getAllBooks();
}

export function getBookById(id: number) {
    return bookRepository.getBookById(id);
}

export function getBooksByTitle(title: string) {
    return bookRepository.getBooksByTitle(title);
}

export function getBookByISBN(isbn: string) {
    return bookRepository.getBookByISBN(isbn);
}

export function addBook(newBook: any) {
    return bookRepository.addBook(newBook);
}

