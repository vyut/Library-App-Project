import express from 'express';
import * as service from '../services/authorService';
import type { Author } from '../models/author';

const router = express.Router();

router.get('/', async (req, res) => {
    const authors = await service.getAllAuthors();
    res.json(authors);
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const author = await service.getAuthorById(id);
    if (author) {
        res.json(author);
    } else {
        res.status(404).json({ error: 'Author not found' });
    }
});

router.post('/', async (req, res) => {
    const newAuthor = await service.createAuthor(req.body);
    res.status(201).json(newAuthor);
});

export default router;
