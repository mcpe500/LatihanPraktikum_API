import { Request, Response } from "express";

export const LoginHandler = async (req: Request, res: Response) => {
  return res.send({ message: "success" }).status(200);
};
export const registerHandler = async (req: Request, res: Response) => {
  return res.send({ message: "success" }).status(200);
};
