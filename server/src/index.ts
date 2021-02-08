import express,{ Application } from "express";
import indexRoutes from "./routes/indexRoutes";
import filmsRoutes from "./routes/filmRoutes";
import usersRoutes from "./routes/userRoutes";
import uservotesmovieRoutes from "./routes/uservotesmovieRoutes";
import morgan from "morgan";
import cors from 'cors';
import authRoutes from "./routes/authRoutes";
class Server{
    public app: Application;
    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        }
    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/films',filmsRoutes);
        this.app.use('/api/users',usersRoutes);
        this.app.use('/api/votes',uservotesmovieRoutes);
        this.app.use('/api/auth',authRoutes);
    }   
    start(): void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('server on port,', this.app.get('port'));
        });
    }


}
const server=new Server();
server.start();