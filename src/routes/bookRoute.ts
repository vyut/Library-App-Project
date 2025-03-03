import express from 'express';
import * as service from '../services/bookService';
import type { Book } from '../models/book';

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.query.pageSize && req.query.pageNo) {
        const pageSize = parseInt(req.query.pageSize as string) || 3;
        const pageNo = parseInt(req.query.pageNo as string) || 1;
        const keyword = req.query.keyword as string;

        try {
            const result = await service.getAllBooksWithAuthorPagination(keyword, pageSize, pageNo);

            if (result.books.length === 0) {
                res.status(404).send("No books found");
                return;
            }
            
            res.setHeader("x-total-count", result.count.toString());
            res.json(result.books);
        } catch (error) {
            if (pageNo < 1 || pageSize < 1) {
                res.status(400).send("Invalid pageNo or pageSize");
            } else {
                res.status(500).send("Internal server error");
            }
            return;
        } finally {
            console.log(`Request is completed, with pageNo=${pageNo} and pageSize=${pageSize}`);
        }
        const totalBooks = await service.count();
    } else if (req.query.category) {
        const category = req.query.category;
        const filteredBooks = await service.getBooksByCategory(category as string);
        res.json(filteredBooks);
    } else {
        res.json(await service.getAllBooks());
    }
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const book = await service.getBookById(id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

router.get('/title/:title', async (req, res) => {
    const title = req.params.title as string;
    const books = await service.getBooksByTitle(title);
    res.json(books);
});

router.get('/isbn/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    const book = await service.getBookByISBN(isbn);
});

router.post('/', async (req, res) => {
    const newBook = await service.addBook(req.body);
    res.status(201).json(newBook);
});

export default router;
