import { Request, Response } from 'express';
import pool from '../database';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
class AuthController {

    public async login(req: Request, res: Response) {
        const JWT_Secret = 'your_secret_key';
        var { email, password } = req.body;
        console.log("bien hecho");
        if (!(email && password)) {
            return res.status(400).json({ message: ' Username & Password are required!' });
        }
        
        const k = await pool.query('select* from user where email=?', [email]);
        if (k.length == 0) {
            res.status(404).json({ 'text': 'email or password incorect 1' });
        } else {
            const salt = bcrypt.genSaltSync(10);
            if (!bcrypt.compareSync(password, k[0].password)) {
                res.status(404).json({ 'text': 'email or password incorect 2' });
            } else {

                const token = jwt.sign({ userId: k[0].id, email: k[0].email },JWT_Secret);
                console.log("bien hecho");
                console.log(token);
                //res.header('auth-token', token).json(token)
                return res.json({ userId: k[0].id, email: k[0].email, token: token});
            }
        }

    }
}
export const authController = new AuthController();