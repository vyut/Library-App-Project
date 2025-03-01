import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedBooks() {
    const authors = await prisma.author.findMany();
    const authorMap = new Map(authors.map(author => [`${author.firstName} ${author.lastName}`, author.id]));

    const books = [
        {
            title: 'Harry Potter and the Philosopher\'s Stone',
            isbn: '9780747532743',
            category: 'Fantasy',
            authorId: authorMap.get('J.K. Rowling')
        },
        {
            title: 'Harry Potter and the Chamber of Secrets',
            isbn: '9780747538486',
            category: 'Fantasy',
            authorId: authorMap.get('J.K. Rowling')
        },
        {
            title: 'A Game of Thrones',
            isbn: '9780553103540',
            category: 'Fantasy',
            authorId: authorMap.get('George R.R. Martin')
        },
        {
            title: 'A Clash of Kings',
            isbn: '9780553108033',
            category: 'Fantasy',
            authorId: authorMap.get('George R.R. Martin')
        },
        {
            title: 'The Hobbit',
            isbn: '9780048231471',
            category: 'Fantasy',
            authorId: authorMap.get('J.R.R. Tolkien')
        },
        {
            title: 'The Lord of the Rings',
            isbn: '9780618640157',
            category: 'Fantasy',
            authorId: authorMap.get('J.R.R. Tolkien')
        },
        {
            title: 'Murder on the Orient Express',
            isbn: '9780062693662',
            category: 'Mystery',
            authorId: authorMap.get('Agatha Christie')
        },
        {
            title: 'Death on the Nile',
            isbn: '9780062073556',
            category: 'Mystery',
            authorId: authorMap.get('Agatha Christie')
        },
        {
            title: 'The Shining',
            isbn: '9780307743657',
            category: 'Horror',
            authorId: authorMap.get('Stephen King')
        },
        {
            title: 'It',
            isbn: '9781501142970',
            category: 'Horror',
            authorId: authorMap.get('Stephen King')
        }
    ]

    console.log('Start seeding books...');
    for (const book of books) {
        if (book.authorId) {
            await prisma.book.create({         
                data: {
                    title: book.title,
                    isbn: book.isbn,
                    category: book.category,
                    authorId: book.authorId
                }
            });
        } else {
            console.warn(`Skipping book "${book.title}" due to missing authorId`);
        }
    }
    console.log('Seeding books completed!');
}