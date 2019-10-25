import { createApp } from "@unify/app";
import { UnifyRes } from "@unify/utils/requestHandlers";
import { database } from "@unify/database";
import { User } from "./database/entity/User";

/*
createConnection()
  .then(async connection => {
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
  })
  .catch(error => console.log(error));

*/

database({
  entities: [__dirname + "/database/entity/*.ts"],
  migrations: ["database/migration/**/*.ts"]
}).then(db => {
  console.log(db.entityMetadatas);
  const app = createApp({
    database: db,
    handlers: [
      server => {
        server.get("/hello", async (req, res: UnifyRes) => {
          try {
            res.end("hello");
          } catch (e) {
            res.handleUnexpectedError(e);
          }
        });
      }
    ]
  });

  app.listen(process.env.PORT || "8080", () => {
    console.log("8080");
  });
});
