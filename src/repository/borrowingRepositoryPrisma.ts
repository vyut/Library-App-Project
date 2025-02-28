import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); 

export function getAllBorrowings() {
    return prisma.borrowing.findMany({
        include: {
            book: true,
            member: true,
        },
    });
}

export function getBorrowingById(id: number) {
    return prisma.borrowing.findUnique({
        where: {
            id: id
        },
        include: {
            book: true,
            member: true
        }
    });
}

export function getBooksByDueDate(dueDate: Date) {
    return prisma.borrowing.findMany({
        where: {
            dueDate: dueDate
        },
        include: {
            book: true,
            member: true
        }
    });
}

export function getBooksNotReturned() {
    return prisma.borrowing.findMany({
        where: {
            returnedAt: null
        },
        include: {
            book: true,
            member: true
        }
    });
}

export function addBorrowing(newBorrowing: any) {
    return prisma.borrowing.create({
        data: newBorrowing,
        include: {
            book: true,
            member: true
        }
    });
}