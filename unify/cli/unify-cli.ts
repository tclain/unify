import "reflect-metadata";
import { config } from "dotenv";
import * as yargs from "yargs";
import { registerTypeormCommands } from "./commands/TypeOrmFramework";
import { UnifyFrameworkRunCommand } from "./commands/MigrateFramework";

config();

const withTypeOrm = registerTypeormCommands(yargs);

withTypeOrm.command(new UnifyFrameworkRunCommand());

withTypeOrm.argv;

// yargs.command("unify:migrate");
