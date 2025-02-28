import express from 'express';
import { getAllBooks, getBookById, getBooksByTitle, getBookByISBN, addBook } from '../services/bookService';

const router = express.Router();

router.get('/', async (req, res) => {
    const books = await getAllBooks();
    res.json(books);
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const book = await getBookById(id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

router.get('/title/:title', async (req, res) => {
    const title = req.params.title as string;
    const books = await getBooksByTitle(title);
    res.json(books);
});

router.get('/isbn/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    const book = await getBookByISBN(isbn);
});

router.post('/', async (req, res) => {
    const newBook = await addBook(req.body);
    res.status(201).json(newBook);
});

export default router;
