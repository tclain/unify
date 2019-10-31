import { createApp } from "@unify/app";
import { UnifyRes } from "@unify/utils/requestHandlers";
import { createConnection } from "typeorm";

createConnection().then(db => {
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
