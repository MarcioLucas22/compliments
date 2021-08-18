import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"


interface IComplimentRequest {
  user_sender: string
  user_receiver: string
  tag_id: string
  message:  string
}

class CreateComplimentService {
  async execute({ message, tag_id, user_receiver, user_sender }: IComplimentRequest) {
      const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
      const userRepositories =  getCustomRepository(UsersRepositories)

      const userReceiverExists = await userRepositories.findOne(user_receiver)

      if(!userReceiverExists) {
        throw new Error('User receiver does not exists')
      }

      // Verifica se o elogio está sendo enviado para si mesmo
      if(user_sender === user_receiver) {
        throw new Error('Invalid Receiver')
      }

      const compliment = complimentsRepositories.create({
        tag_id,
        user_sender,
        user_receiver,
        message
      })

      await complimentsRepositories.save(compliment)

      return compliment
  }
}

export { CreateComplimentService }