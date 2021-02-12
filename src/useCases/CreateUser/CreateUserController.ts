import { Request, Response} from 'express'
import { CreateUserService } from "./CreateUserService";


export class CreateUserController {

    constructor( private createUserService: CreateUserService){

    }

    async handle(req: Request, res: Response): Promise<Response>{
        const { name, email, password } = req.body;

        try{
            await this.createUserService.execute({
                name, email, password
            })

            return res.status(201).send()
        }catch(err){
            return res.statu(400).json({
                message: err.message || 'Unexpected error'
            })
        }
    }
}