import { Member, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function getAllMembers() {
    return prisma.member.findMany();
}

export function getMemberById(id: number) {
    return prisma.member.findUnique({
        where: {
            id: id
        }
    });
}

export function getMemberByMemberID(memberId: string) {
    return prisma.member.findUnique({
        where: {
            memberId: memberId
        }
    });
}

export function getMemberByNames(name: string) {
    return prisma.member.findMany({
        where: {
            OR: [
                { firstName: { contains: name }},
                { lastName: { contains: name }}
            ]
        }
    });
}

export function addMmember(newMember: Member) {
    return prisma.member.create({
        data: newMember
    });
}