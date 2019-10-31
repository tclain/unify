import { config } from "dotenv";
import * as Express from "express";
import { json } from "body-parser";
import { configureErrorHandlers } from "@unify/errors";
import { configureLogging } from "@unify/logs";
import { Connection } from "typeorm";
import { createConnection } from "typeorm";

export interface App {}

export type AppConfigurator = (app: Express.Application) => void;

export interface IAppOptions {
  database?: Connection;
  middlewares?: Express.Handler[];
  handlers?: Array<(app: Express.Express) => void>;
  modules?: {
    errors?: AppConfigurator;
    logging?: AppConfigurator;
  };
}

const baseModules: IAppOptions["modules"] = {
  errors: configureErrorHandlers,
  logging: configureLogging
};

/**
 * create server side app with all sensible defaults sets
 * @param options
 */
export const createApp = ({
  middlewares = [],
  modules = {},
  handlers = [],
  database
}: IAppOptions = {}): Express.Application => {
  config();

  if (!database)
    throw new Error("IMpossible to reach database, no connection is defined");
  const app = Express();

  // common middlewares
  app.use(json());

  const modulesWithOverrides = { ...baseModules, ...modules };

  modulesWithOverrides.logging(app);
  modulesWithOverrides.errors(app);

  // use custom middlewares

  if (handlers.length) {
    handlers.forEach(handler => {
      handler(app);
    });
  }

  if (middlewares.length)
    middlewares.forEach(middleware => {
      app.use(middleware);
    });

  return app;
};
