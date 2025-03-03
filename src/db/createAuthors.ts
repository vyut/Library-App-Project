import { Author } from './../../node_modules/.prisma/client/index.d';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedAuthors() {
    const authors = [
        {
            firstName: 'J.K.',
            lastName: 'Rowling',
            affiliation: 'Bloomsbury Publishing'
        },
        {
            firstName: 'George R.R.',
            lastName: 'Martin',
            affiliation: 'Bantam Books'
        },
        {
            firstName: 'J.R.R.',
            lastName: 'Tolkien',
            affiliation: 'Allen & Unwin'
        },
        {
            firstName: 'Agatha',
            lastName: 'Christie',
            affiliation: 'William Collins & Sons'
        },
        {
            firstName: 'Stephen',
            lastName: 'King',
            affiliation: 'Scribner'
        }
    ]

    console.log('Start seeding authors...');
    for (const author of authors) {
        await prisma.author.create({
            data: {
                firstName: author.firstName,
                lastName: author.lastName,
                affiliation: author.affiliation
            }
        });
    }
    console.log('Seeding authors completed.');
}