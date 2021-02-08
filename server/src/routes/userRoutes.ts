import { Router } from "express";
import { userController } from "../controllers/userController";


class UsersRoutes{
    router: Router=Router();

    constructor(){
        this.config();
    }
    config():void{
        this.router.post('/',userController.add);
        this.router.get('/',userController.getAll);
        this.router.get('/:id',userController.getOne);
        this.router.put('/:id',userController.edit);
    }
}
const usersRoutes =new UsersRoutes();
export default usersRoutes.router;