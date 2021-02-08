import { Request,Response} from 'express';

import pool from '../database';


class FilmController{
    public async getOne(req :Request,res:Response){
        const film=await pool.query('select* from film where id=?',[req.params.id]);
        if (film.length>0){
            return res.json(film[0]);
        }
        res.status(404).json({'text':'Film no exist'});
        
    }

    public async add(req :Request,res:Response){
        await pool.query('insert into film set ?',[req.body]);

        return res.json({
            title:'Film add'
        });
    }
    public async getAll(req :Request,res:Response){
        const games =await pool.query('select* from film');

        return res.json(games);
    }
    public async getCommentary(req :Request,res:Response){
        const films =await pool.query('select u.name,v.commentary, v.score from user u,(select * from uservotesmovie where idfilm=?) v where u.id=v.iduser',[req.params.id]);

        return res.json(films);
    }
    public async getCount(req :Request,res:Response){
        const count =await pool.query('select count(*) as count from user u,(select* from uservotesmovie where idfilm=?) v where v.iduser=u.id;',[req.params.id]);

        if (count.length>0){
            return res.json(count[0].count);
        };
    }
    public async edit(req :Request,res:Response){
        await pool.query('update film set ? where id=?',[req.body,req.params.id] );

        return res.json({
            title:'film edit'
        });
    }


}

export const filmController =new FilmController();