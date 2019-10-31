import { MigrationRunCommand } from "typeorm/commands/MigrationRunCommand";
import { MigrationGenerateCommand } from "typeorm/commands/MigrationGenerateCommand";
import { resolve } from "path";
import * as yargs from "yargs";

export class UnifyFrameworkRunMigrationCommand extends MigrationRunCommand {
  command = "framework:migration:run";

  handler(args: yargs.Arguments) {
    return super.handler({
      ...args,
      dir: resolve("../../database/models")
    });
  }
}

export class UnifyFrameworkGenerateCommand extends MigrationGenerateCommand {
  command = "framework:migration:generate";
}
