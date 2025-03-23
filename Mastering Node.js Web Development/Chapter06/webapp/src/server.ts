import { createServer } from "http";
// import { redirectionHandler, newUrlHandler, defaultHandler, 
//             notFoundHandler } from "./handler";
// import { basicHandler } from './handler';
import { createServer as createHttpsServer } from "https";
import { readFileSync } from "fs";
import express, { Express } from "express";
import { readHandler } from "./readHandler";

const port = 5000;
const https_port = 5500;

// const server = createServer(redirectionHandler);

// server.listen(port, 
//     () => console.log(`(Event) Server listening on port ${port}`));

// const httpsConfig = {
//     key: readFileSync("key.pem"), 
//     cert: readFileSync("cert.pem")
// };    

const expressApp: Express = express();
// expressApp.get("/favicon.ico", notFoundHandler);
// expressApp.get("/newurl/:message?", newUrlHandler);
// expressApp.get("*", defaultHandler);

// expressApp.get('/favicon.ico', (req, resp) => {
//     resp.statusCode = 404;
//     resp.end();
// });

// expressApp.get('*', basicHandler);
expressApp.post('/read', readHandler);

expressApp.use(express.static('static'));
expressApp.use(express.static('node_modules/bootstrap/dist'));

const server = createServer(expressApp);

server.listen(port, () => console.log(`HTTP Server listening on port ${port}`));

// const httpsServer = createHttpsServer(httpsConfig, expressApp);

// httpsServer.listen(https_port, 
//     () => console.log(`HTTPS Server listening on port ${https_port}`));

















