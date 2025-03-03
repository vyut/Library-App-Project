import { Borrowing } from './../../node_modules/.prisma/client/index.d';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function seedBorrowings() {
    const books = await prisma.book.findMany();
    const members = await prisma.member.findMany();

    const borrowings = [
        {
            bookId: books[0].id,
            memberId: members[0].id,
            borrowedAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 14 days ago
            dueDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
            returnedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000) // 8 days ago (returned before due date)
        },
        {
            bookId: books[1].id,
            memberId: members[0].id,
            borrowedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 days ago
            dueDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
            returnedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago (returned after due date)
        },
        {
            bookId: books[2].id,
            memberId: members[1].id,
            borrowedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
            returnedAt: null // not returned yet
        },
        {
            bookId: books[3].id,
            memberId: members[2].id,
            borrowedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
            dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
            returnedAt: null // not returned yet
        },
        {
            bookId: books[4].id,
            memberId: members[3].id,
            borrowedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
            dueDate: new Date(), // due today
            returnedAt: null // not returned yet
        }
    ];

    console.log('Start seeding borrowings...');
    for (const borrowing of borrowings) {
        await prisma.borrowing.create({
            data: 
            {
                bookId: borrowing.bookId,
                memberId: borrowing.memberId,
                borrowedAt: borrowing.borrowedAt,
                dueDate: borrowing.dueDate,
                returnedAt: borrowing.returnedAt
            }
        });
    }
    console.log('Seeding borrowings completed!');
}
