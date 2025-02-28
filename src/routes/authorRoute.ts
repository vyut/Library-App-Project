import express from 'express';
import { getAllAuthors, getAuthorById, createAuthor } from '../services/authorService';

const router = express.Router();

router.get('/', async (req, res) => {
    const authors = await getAllAuthors();
    res.json(authors);
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const author = await getAuthorById(id);
    if (author) {
        res.json(author);
    } else {
        res.status(404).json({ error: 'Author not found' });
    }
});

router.post('/', async (req, res) => {
    const newAuthor = await createAuthor(req.body);
    res.status(201).json(newAuthor);
});

export default router;
