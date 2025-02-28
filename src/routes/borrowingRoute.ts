import express from 'express';
import { getAllBorrowings, getBorrowingById, getBorrowingByDueDate, getBorrowingNotReturned, addBorrowing } from '../services/borrowingService';

const router = express.Router();

router.get('/', async (req, res) => {
    const borrowings = await getAllBorrowings();
    res.json(borrowings);
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const borrowing = await getBorrowingById(id);
    if (borrowing) {
        res.json(borrowing);
    } else {
        res.status(404).json({ error: 'Borrowing not found' });
    }
}
);

router.get('/due/:dueDate', async (req, res) => {
    const dueDate = new Date(req.params.dueDate);
    const borrowing = await getBorrowingByDueDate(dueDate);
    res.json(borrowing);
});

router.get('/notreturned', async (req, res) => {
    const borrowing = await getBorrowingNotReturned();
    res.json(borrowing);
});

router.post('/', async (req, res) => {
    const newBorrowing = req.body;
    const result = await addBorrowing(newBorrowing);
    res.json(result);
});

export default router;
