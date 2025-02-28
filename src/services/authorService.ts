import { Author } from '../models/author';
import * as authorRepository from '../repository/authorRepositoryPrisma';

export function getAllAuthors(): Promise<Author[]> {
    return authorRepository.getAllAuthors();
}

export function getAuthorById(id: number): Promise<Author | null> {
    return authorRepository.getAuthorById(id);
}

export function createAuthor(newAuthor: Author): Promise<Author> {
    return authorRepository.createAuthor(newAuthor);
}