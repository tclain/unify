import "reflect-metadata";
import { createConnection, ConnectionOptions } from "typeorm";
import { config } from "dotenv";

config();
/**
 * a connectin to a database in the typeorm format
 * @param param0
 */
export const database = (opts: Partial<ConnectionOptions>) => {
  return createConnection({
    type: process.env.TYPEORM_CONNECTION as any,
    database: process.env.TYPEORM_DATABASE as any,
    ...opts
  } as any);
};
