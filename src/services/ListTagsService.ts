import { getCustomRepository } from "typeorm"
import { Tag } from "../entities/Tag"
import { TagsRepositories } from "../repositories/TagsRepositories"


class ListTagsService {
  async execute() {

    const tagRepositories = getCustomRepository(TagsRepositories)

    const tags = await tagRepositories.find()

    return tags
  }
}

export { ListTagsService }