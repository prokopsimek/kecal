import "reflect-metadata";
import * as bodyParser from "body-parser";
import express from "express";
import next from "next";
import nextI18next from "./i18n";
import compression from "compression";
import * as Sentry from "@sentry/node";

const nextI18NextMiddleware = require("next-i18next/middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    // redirect to HTTPS if in production
    if (process.env.NODE_ENV === "production") {
      Sentry.init({
        dsn: "https://xxx:yyy@example.com/1"
      });

      // The request handler must be the first middleware on the app
      server.use(Sentry.Handlers.requestHandler());
      // The error handler must be before any other error middleware
      server.use(Sentry.Handlers.errorHandler());

      server.use((req, res, next) => {
        const schema = req.headers["x-forwarded-proto"];
        if (schema === "https") {
          // Already https; don't do anything special.
          next();
        } else {
          // Redirect to https.
          res.redirect(`https://${req.headers.host}${req.url}`);
        }
      });
    }

    server.use(nextI18NextMiddleware(nextI18next));
    server.use(bodyParser.json());
    server.use(compression());
    server.use((err: any, _req: any, res: any, _next: any) => {
      console.error(err.stack);
      res.status(500).send("Something went wrong!!");
    });

    server.get("*", (req: any, res: any) => {
      return handle(req, res);
    });

    server.listen(port, (err: any) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((error: any) => {
    console.log(error.stack);
    process.exit(1);
  });
