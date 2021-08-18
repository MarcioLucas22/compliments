import { getCustomRepository } from "typeorm"
import { User } from "../entities/User"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"


class CreateTagService {

  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if(!name) {
      throw new Error('Name Incorrect')
    }

    const tagAlreadyExists = await tagsRepositories.findOne({
      name
    })

    if(tagAlreadyExists) {
      throw new Error('Tag Already Exists')
    }

    const tag = tagsRepositories.create({
      name
    })

    await tagsRepositories.save(tag)

    return tag
  }
}

export { CreateTagService }