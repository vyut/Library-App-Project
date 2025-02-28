import { Author, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function getAllAuthors() {
    return prisma.author.findMany({
        include: {
            books: true
        }
    }
    );
}

export function getAuthorById(id: number) {
    return prisma.author.findUnique({
        where: {
            id: id
        },
        include: {
            books: true
        }
    });
}

export function createAuthor(newAuthor: Author) {
    return prisma.author.create({
        data: newAuthor
    });
}