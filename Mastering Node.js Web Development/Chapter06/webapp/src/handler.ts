import { IncomingMessage, ServerResponse } from "http";
import { Request, Response } from "express";
import { readFileSync } from "fs";

export const redirectionHandler = (req: IncomingMessage, resp: ServerResponse) => {
    resp.writeHead(302, {
        "Location": "http://localhost:5500"
    });
    resp.end();
}

export const notFoundHandler = (req: Request, resp: Response) => {
    resp.sendStatus(404);
}

export const newUrlHandler = (req: Request, resp: Response) => {
    const msg = req.params.message ?? "(No Message)";
    resp.send(`Hello, ${msg}`);
}

export const defaultHandler = (req: Request, resp: Response) => {
    if (req.query.keyword) {
        resp.send(`Hello, ${req.query.keyword}`);                    
    } else {
        resp.send(`Hello, ${req.protocol.toUpperCase()}`);
    }
}

export const basicHandler = (req: IncomingMessage, resp: ServerResponse) => {
    
    resp.write(readFileSync('static/index.html'));
    resp.end();
    
    // resp.end('Hello world');
};



