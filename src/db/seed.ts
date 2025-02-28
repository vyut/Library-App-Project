// src/db/seed.ts
import { PrismaClient } from '@prisma/client';

import { seedAuthors } from './createAuthors';
import { seedBooks } from './createBooks';
import { seedMembers } from './createMembers';
import { seedBorrowings } from './createBorrowings';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Starting database seed...');
    
    await seedAuthors();
    await seedBooks();
    await seedMembers();
    await seedBorrowings();
    
    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();