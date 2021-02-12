import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserService {

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ){

    }

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = this.usersRepository.findByEmail(data.email)
        
        if(userAlreadyExists) throw new Error ('User already exists')

        const user = new User(data)

        await this.usersRepository.save(user)

        await this.mailProvider.sendMail({
            to: {
                name: "brenda",
                email: 'brenda@mail.com'
            },
            from: {
                name: "app",
                email: 'equipe@mail.com'
            },
            subject: "Estuda!",
            body: "estuda solid guria!"
        })
    }
}