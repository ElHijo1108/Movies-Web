import { Router } from "express";
import { uservotesmovieController } from "../controllers/uservotesmovieController";


class UservotesmovieRoutes{
    router: Router=Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.post('/',uservotesmovieController.add);
        this.router.get('/',uservotesmovieController.getAll);
        this.router.get('/:id/:idu',uservotesmovieController.getOne);

    }
}
const uservotesmovieRoutes =new UservotesmovieRoutes();
export default uservotesmovieRoutes.router;