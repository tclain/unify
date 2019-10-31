import { Express } from "express";
import { unexpectedError } from "@unify/utils/httpCodes";
import { UnifyRes } from "@unify/utils/requestHandlers";
import { UnifyRequestHandler } from "@unify/utils/requestHandlers";

export const handleError = (res: UnifyRes, e: Error) => {
  return unexpectedError(res);
};

export const configureErrorHandlers = (app: Express) => {
  app.use(((_req, res, next) => {
    res.handleUnexpectedError = handleError.bind(null, res);
    next();
  }) as UnifyRequestHandler);
};
