import "reflect-metadata";
import { config } from "dotenv";
import * as yargs from "yargs";
import { registerTypeormCommands } from "./commands/TypeOrmFramework";
import { UnifyFrameworkRunMigrationCommand } from "./commands/MigrateFramework";

config();

yargs.command(new UnifyFrameworkRunMigrationCommand());

yargs.argv;
