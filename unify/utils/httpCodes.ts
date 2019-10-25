import { UnifyRes } from "./requestHandlers";

export const notFound = (res: UnifyRes, data = null) => {
  return res.status(404).json(data);
};

export const notAuthorized = (res: UnifyRes, data = null) => {
  return res.status(401).json(data);
};

export const unexpectedError = (res: UnifyRes, data = null) => {
  return res.status(500).json(data);
};

export const success = (res: UnifyRes, data = null) => {
  return res.status(200).json(data);
};

export const created = (res: UnifyRes, data = null) => {
  return res.status(201).json(data);
};
