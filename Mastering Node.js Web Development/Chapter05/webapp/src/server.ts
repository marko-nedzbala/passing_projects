import { createServer } from "http";
import { handler } from "./handler";
import { redirectionHandler, newUrlHandler, defaultHandler, notFoundHanler } from "./handler";
import express, { Express } from 'express';

const port = 5000;

const server = createServer(handler);

// server.on("request", handler);

server.listen(port, () => console.log(`(Event) Server listening on port ${port}`));

// server.on("listening", () => {
//     console.log(`(Event) Server listening on port ${port}`);
// });

const expressApp: Express = express();
expressApp.get('/favicon.ico', notFoundHanler);
expressApp.get('/newurl', newUrlHandler);
expressApp.get('*', defaultHandler);
const httpsServer = createServer(expressApp)







