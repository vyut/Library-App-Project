import { Book, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getAllBooks() {
    return prisma.book.findMany({
        include: {
            author: true,
        },
    });
}

export function getBookById(id: number) {
    return prisma.book.findUnique({
        where: {
            id: id,
        },
        include: {
            author: true,
        },
    });
}

export function getBooksByTitle(title: string) {
    return prisma.book.findMany({
        where: {
            title: title,
        },
        include: {
            author: true,
        },
    });
}

export function getBookByISBN(isbn: string) {
    return prisma.book.findUnique({
        where: {
            isbn: isbn
        }
    });
}

export function addBook(newBook: Omit<Book, 'id'>) {
    return prisma.book.create({
        data: newBook,
    });
}