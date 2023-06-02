import { Request, Response, response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";


//fazendo nossa requesição 
class CreateUserControllers{
    async handle(req:Request, res:Response){
        //descontruir nosso codigo inicio
        const {name, email, password} = req.body//fim

        const createUserService =  new CreateUserService();

        const user = await createUserService.execut({
            name,
            email,
            password
        });

        return res.json({user})
    }
}

export { CreateUserControllers }