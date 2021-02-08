import { Request,Response} from 'express';

class IndexController{
    index(req:Request,res:Response){
     res.json({
         text:'api is /api/films',
         text2:'api is /api/users',
         text3:'api is /api/votes'
     });
    }
}

export const indexController =new IndexController();