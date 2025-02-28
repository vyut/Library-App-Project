import { Borrowing, PrismaClient } from '@prisma/client';
import * as borrowingRepository from '../repository/borrowingRepositoryPrisma';

export function getAllBorrowings() {
    return borrowingRepository.getAllBorrowings();
}

export function getBorrowingById(id: number) {
    return borrowingRepository.getBorrowingById(id);
}

export function getBorrowingByDueDate(dueDate: Date) {
    return borrowingRepository.getBorrowingByDueDate(dueDate);
}

export function getBorrowingNotReturned() {
    return borrowingRepository.getBorrowingNotReturned();
}

export function addBorrowing(newBorrowing: Borrowing) {
    return borrowingRepository.addBorrowing(newBorrowing);
}