import { SchemaSyncCommand } from "typeorm/commands/SchemaSyncCommand";
import { SchemaDropCommand } from "typeorm/commands/SchemaDropCommand";
import { QueryCommand } from "typeorm/commands/QueryCommand";
import { EntityCreateCommand } from "typeorm/commands/EntityCreateCommand";
import { MigrationCreateCommand } from "typeorm/commands/MigrationCreateCommand";
import { MigrationRunCommand } from "typeorm/commands/MigrationRunCommand";
import { MigrationRevertCommand } from "typeorm/commands/MigrationRevertCommand";
import { MigrationShowCommand } from "typeorm/commands/MigrationShowCommand";
import { SubscriberCreateCommand } from "typeorm/commands/SubscriberCreateCommand";
import { SchemaLogCommand } from "typeorm/commands/SchemaLogCommand";
import { MigrationGenerateCommand } from "typeorm/commands/MigrationGenerateCommand";
import { VersionCommand } from "typeorm/commands/VersionCommand";
import { InitCommand } from "typeorm/commands/InitCommand";
import { CacheClearCommand } from "typeorm/commands/CacheClearCommand";
import * as yargs from "yargs";

export class UnifyMigrationGenerateCommand extends MigrationGenerateCommand {}

export const registerTypeormCommands = yargs => {
  yargs.command(new UnifyMigrationGenerateCommand());
  return yargs;
};
