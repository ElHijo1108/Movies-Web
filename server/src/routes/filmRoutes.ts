import { Router } from "express";
import { filmController } from "../controllers/filmController";


class FilmsRoutes{
    router: Router=Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/:id',filmController.getOne);
        this.router.get('/commentary/:id',filmController.getCommentary);
        this.router.post('/',filmController.add);
        this.router.get('/',filmController.getAll);
        this.router.put('/:id',filmController.edit);
        this.router.get('/count/:id',filmController.getCount);
    }
}
const filmsRoutes =new FilmsRoutes();
export default filmsRoutes.router;