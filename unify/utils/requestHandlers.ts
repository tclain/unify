import { IUser } from "@unify/auth/types";
import { Lambda } from "./types";
import { Request, Response } from "express";

export interface UnifyReq extends Request {
  user?: IUser;
}

export interface UnifyRes extends Response {
  handleUnexpectedError: (error: Error) => void;
}

export type UnifyRequestHandler = (
  req: UnifyReq,
  res: UnifyRes,
  next?: Lambda
) => void;
