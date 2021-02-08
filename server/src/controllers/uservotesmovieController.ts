import { Request, Response } from 'express';
import pool from '../database';

class UservotesmovieController {
    public async add(req: Request, res: Response) {
        await pool.query('insert into uservotesmovie set ?', [req.body]);
        return res.json({
            title: 'Vote add'
        });
    }
    public async getAll(req: Request, res: Response) {
        const vote = await pool.query('select* from uservotesmovie');
        return res.json(vote);
    }
    public async getOne(req: Request, res: Response) {
        const vote = await pool.query('select* from uservotesmovie where iduser=? and idfilm=?', [req.params.idu, req.params.id]);
        if (vote.length > 0) {
            return res.json(vote[0]);
        }
        return null;
    }
}

export const uservotesmovieController = new UservotesmovieController();