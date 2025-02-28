import { PrismaClient } from '@prisma/client';
import * as borrowingRepository from '../repository/borrowingRepositoryPrisma';

export function getAllBorrowings() {
    return borrowingRepository.getAllBorrowings();
}

export function getBorrowingById(id: number) {
    return borrowingRepository.getBorrowingById(id);
}

export function getBooksByDueDate(dueDate: Date) {
    return borrowingRepository.getBooksByDueDate(dueDate);
}

export function getBooksNotReturned() {
    return borrowingRepository.getBooksNotReturned();
}

export function addBorrowing(newBorrowing: any) {
    return borrowingRepository.addBorrowing(newBorrowing);
}