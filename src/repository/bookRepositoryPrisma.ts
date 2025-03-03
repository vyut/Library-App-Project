import { PrismaClient } from "@prisma/client";
import { Book, PageBook } from "../models/book";

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

export function getBooksByCategory(category: string) {
    return prisma.book.findMany({
        where: {
            category: category,
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

export async function getAllBooksWithAuthorPagination(
    keyword: string,
    pageSize: number,
    pageNo: number
) {
    const where = {
        OR: [
            { title: { contains: keyword } },
            { category: { contains: keyword } },
            { author: { firstName: { contains: keyword } } },
            { author: { lastName: { contains: keyword } } },
            { borrowings: { some: { member: { firstName: { contains: keyword } } } } },
            { borrowings: { some: { member: { lastName: { contains: keyword } } } } },
        ],
    }

    const books = await prisma.book.findMany({
        where,
        skip: pageSize * (pageNo - 1),
        take: pageSize,
        select: {
            id: true,
            title: true,
            category: true,
            authorId: false,
            author: {
                select: {
                    firstName: true,
                    lastName: true,
                },
            },
            borrowings: {
                select: {
                    member: {
                        select: {
                            firstName: true,
                            lastName: true,
                        },
                    }
                },
            }
        },
    });
    const count = await prisma.book.count({ where });
    return { count, books };
}

export function countBook() {
    return prisma.book.count();
}