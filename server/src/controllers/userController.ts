import { Request, Response } from 'express';
import pool from '../database';
import * as bcrypt from 'bcryptjs';

class UserController {
    public async add(req: Request, res: Response) {
        console.log(req.body);
        const salt = bcrypt.genSaltSync(10);
        req.body.password=bcrypt.hashSync(req.body.password, salt);
        console.log(req.body);
        await pool.query('insert into user set ?', [req.body]);
        res.json({
            text: 'User create'
        });
    }
    public async getAll(req: Request, res: Response) {

        const users=await pool.query('select*from user');
        res.json(users);
    }
    public async getOne(req: Request, res: Response) {

        const user=await pool.query('select*from user where id=?',[req.params.id]);
        
        if(user.length>0){
            
            return res.json(user[0]);
        }
        res.status(404).json({'text':'user no exist'});
    }
    public async edit(req: Request, res: Response) {

        await pool.query('update user set ? where id=?',[req.body,req.params.id]);
        res.json({
            text: 'User edit'
        });
    }
}

export const userController = new UserController();