export interface Borrowing {
    id: number;
    bookId: number;
    memberId: number;
    borrowedAt: Date;
    dueDate: Date;
    returnedAt: Date;
}