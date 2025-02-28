import { PrismaClient } from "@prisma/client";
import * as memberRepository from "../repository/memberRepositoryPrisma";

export function getAllMembers() {
    return memberRepository.getAllMembers();
}

export function getMemberById(id: number) {
    return memberRepository.getMemberById(id);
}

export function getMemberByMemberID(memberId: string) {
    return memberRepository.getMemberByMemberID(memberId);
}

export function getMemberByNames(name: string) {
    return memberRepository.getMemberByNames(name);
}

export function addMmember(newMember: any) {
    return memberRepository.addMmember(newMember);
}