import express from 'express';
import { getAllMembers, getMemberById, getMemberByMemberID, getMemberByNames, addMmember } from '../services/memberService';

// export function getAllMembers() {
//     return memberRepository.getAllMembers();
// }

// export function getMemberById(id: number) {
//     return memberRepository.getMemberById(id);
// }

// export function getMemberByMemberID(memberId: string) {
//     return memberRepository.getMemberByMemberID(memberId);
// }

// export function getMemberByNames(name: string) {
//     return memberRepository.getMemberByNames(name);
// }

// export function addMmember(newMember: any) {
//     return memberRepository.addMmember(newMember);
// }

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.query.name) {
        const name = req.query.name as string;
        const members = await getMemberByNames(name);
        res.json(members);
    }
    else {
        const members = await getAllMembers();
        res.json(members);
    }
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const member = await getMemberById(id);
    if (member) {
        res.json(member);
    } else {
        res.status(404).json({ error: 'Member not found' });
    }
});

router.get('/memberid/:memberid', async (req, res) => {
    const memberId = req.params.memberid;
    const member = await getMemberByMemberID(memberId);
    if (member) {
        res.json(member);
    } else {
        res.status(404).json({ error: 'Member not found' });
    }
});

router.get('/search', async (req, res) => {
    const name = req.query.name as string;
    const members = await getMemberByNames(name);
    res.json(members);
});

router.post('/', async (req, res) => {
    const newMember = req.body;
    const addedMember = await addMmember(newMember);
    res.status(201).json(addedMember);
});

export default router