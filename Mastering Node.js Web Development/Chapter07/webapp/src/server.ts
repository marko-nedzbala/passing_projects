import { createServer } from "http";
import express, {Express } from "express";
import { readHandler } from "./readHandler";
import helmet from "helmet";

const port = 5000;

const expressApp: Express = express();

expressApp.use(helmet({
    contentSecurityPolicy: {
        directives: {
            imgSrc: "'self'",
            scriptSrcAttr: "'none'",
            scriptSrc: "'self'",
            connectSrc: "'self' ws://localhost:5000"
        }
    }
}));

expressApp.use(express.json());

expressApp.post("/read", readHandler);
expressApp.use(express.static("static"));
expressApp.use(express.static("node_modules/bootstrap/dist"));
expressApp.use(express.static('dist/client'));

const server = createServer(expressApp);

server.listen(port, 
    () => console.log(`HTTP Server listening on port ${port}`));