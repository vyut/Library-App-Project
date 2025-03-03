import express from 'express';
import * as service from '../services/memberService';
import type { Member } from '../models/member';

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.query.name) {
        const name = req.query.name as string;
        const members = await service.getMemberByNames(name);
        res.json(members);
    }
    else {
        const members = await service.getAllMembers();
        res.json(members);
    }
});

router.get('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const member = await service.getMemberById(id);
    if (member) {
        res.json(member);
    } else {
        res.status(404).json({ error: 'Member not found' });
    }
});

router.get('/memberid/:memberid', async (req, res) => {
    const memberId = req.params.memberid;
    const member = await service.getMemberByMemberID(memberId);
    if (member) {
        res.json(member);
    } else {
        res.status(404).json({ error: 'Member not found' });
    }
});

router.get('/search', async (req, res) => {
    const name = req.query.name as string;
    const members = await service.getMemberByNames(name);
    res.json(members);
});

router.post('/', async (req, res) => {
    const addedMember = await service.addMmember(req.body);
    res.status(201).json(addedMember);
});

export default router