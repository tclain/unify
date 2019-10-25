import { Express } from "express";
import { createLogger, format, transports } from "winston";

const logger = createLogger({
  level: "info",

  format: format.combine(
    format.colorize(),
    format.align(),
    format.timestamp(),
    format.metadata(),
    format.json()
  ),
  transports: [new transports.Console()]
});

export const configureLogging = (app: Express) => {
  app.all("*", (_req, _res, next) => {
    const body = JSON.stringify(_req.body);
    logger.info(`[inbound-request] ${_req.originalUrl} ${body}`);
    next();
  });
};
