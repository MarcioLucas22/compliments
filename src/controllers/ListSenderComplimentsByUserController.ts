import { Request, Response } from "express";
import { ListSenderComplimentsByUserService } from "../services/ListSendComplimentsByUserService";


class ListSenderComplimentsByUserController {
  async handle(req: Request, res: Response) {
    const { user_id } =  req

    const listSenderComplimentsByUserService =  new ListSenderComplimentsByUserService()

    const compliments = await listSenderComplimentsByUserService.execute(user_id)

    return res.json(compliments)
  }
}

export { ListSenderComplimentsByUserController }