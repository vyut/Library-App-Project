import { Member } from './../../node_modules/.prisma/client/index.d';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedMembers() {
    const members = [
        {
            memberId: 'M001',
            firstName: 'John',
            lastName: 'Doe',
            phone: '0812345678'
        },
        {
            memberId: 'M002',
            firstName: 'Jane',
            lastName: 'Smith',
            phone: '0823456789'
        },
        {
            memberId: 'M003',
            firstName: 'Bob',
            lastName: 'Johnson',
            phone: '0834567890'
        },
        {
            memberId: 'M004',
            firstName: 'Alice',
            lastName: 'Williams',
            phone: '0845678901'
        },
        {
            memberId: 'M005',
            firstName: 'Charlie',
            lastName: 'Brown',
            phone: '0856789012'
        }
    ]

    console.log('Start seeding members...');
    for (const member of members) {
        await prisma.member.create({
            data: 
            {
                memberId: member.memberId,
                firstName: member.firstName,
                lastName: member.lastName,
                phone: member.phone
            }
        });
    }
    console.log('Seeding members completed!');
}