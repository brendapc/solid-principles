import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresFakeRepository } from "../../repositories/implementations/PostgresFakeRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUserRepository = new PostgresFakeRepository()

const createUserService = new CreateUserService(postgresUserRepository, mailtrapMailProvider)

const createUserController = new CreateUserController(createUserService)

export { createUserService, createUserController}