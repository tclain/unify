import { createApp } from "@unify/app";
import { UnifyRes } from "@unify/utils/requestHandlers";

const app = createApp({
  handlers: [
    server => {
      server.get("/hello", (req, res: UnifyRes) => {
        try {
          console.log("/hello");
          throw new Error("bla");
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
