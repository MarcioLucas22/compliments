import { Request, Response } from "express";
import { ListReceiverComplimentsByUserService } from "../services/ListReceiverComplimentsByUserService";


class ListReceiverComplimentsByUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req

    const listReceiverComplimentsByUserService =  new ListReceiverComplimentsByUserService()

    const compliments = await listReceiverComplimentsByUserService.execute(user_id)

    return res.json(compliments)
  }
}

export { ListReceiverComplimentsByUserController }