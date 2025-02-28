import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

import authorRoutes from './routes/authorRoute';
import bookRoutes from './routes/bookRoute';
import memberRoutes from './routes/memberRoute';
import borrowingRoutes from './routes/borrowingRoute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/members', memberRoutes);
app.use('/borrowings', borrowingRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
