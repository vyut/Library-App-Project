import express from 'express';
import * as service from '../services/borrowingService';
import type { Borrowing } from '../models/borrowing';

const router = express.Router();

router.get('/', async (req, res) => {
    const borrowings = await service.getAllBorrowings();
    res.json(borrowings);
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const borrowing = await service.getBorrowingById(id);
    if (borrowing) {
        res.json(borrowing);
    } else {
        res.status(404).json({ error: 'Borrowing not found' });
    }
}
);

router.get('/due/:dueDate', async (req, res) => {
    const dueDate = new Date(req.params.dueDate);
    const borrowing = await service.getBorrowingByDueDate(dueDate);
    res.json(borrowing);
});

router.get('/notreturned', async (req, res) => {
    const borrowing = await service.getBorrowingNotReturned();
    res.json(borrowing);
});

router.post('/', async (req, res) => {
    const newBorrowing = req.body;
    const result = await service.addBorrowing(newBorrowing);
    res.json(result);
});

export default router;
