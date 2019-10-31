# Unify

a lightweight, dead simple foundation to write apis using typescript, express and typeorm

Supports out of the box: logging, authentication, authorization, easy models, rpc...

## setup

- create a directory that will hold your models: e.g: `src/database/entity`
- create a directory that will hold your migrations: e.g: `src/database/migrations`
- export all base models of `unify` onto your app:

in the root file of your models

create a ormconfig.json in the root of your project following the typeorm documentation and reference your entity and migrations paths

```
{
  "type": "sqlite",
  "host": "localhost",
  "database": "./db",
  "synchronize": true,
  "logging": false,
  "entities": ["src/database/entity/**/*.ts"],
  "migrations": ["src/database/migration/**/*.ts"]
}

```

- alias typeorm to support typescript as an npm scripts:

```
typeorm: 'ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js'
```

- create an app following this minimal example (in `src/index.ts`)

```ts
import { createApp } from "@unify/app";
import { UnifyRes } from "@unify/utils/requestHandlers";
import { createConnection } from "typeorm";

createConnection().then(database => {
  const app = createApp({
    database
  });

  app.listen(process.env.PORT || "8080", () => {
    console.log("listen on port 8080");
  });
});
```

run the initial migration using the typeorm:

```
 yarn typeorm migration:generate -n init
 yarn typeorm migration:run
```

run your app:

```
ts-node ./src/index.ts
```

You are all set !!

## Migrations

all the typeorm commands are supported out of the box

so each time you edit your models (or update unify), just run again:

```
 yarn typeorm migration:generate -n removeExample
```
