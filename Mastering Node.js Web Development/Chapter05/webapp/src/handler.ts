import { IncomingMessage, ServerResponse } from "http";
// import { endPromise, writePromise } from "./promises";
//import { Count } from "./counter_cb";
// import { Count } from "./count_promise";
import { URL } from 'url';
import { TLSSocket } from "tls";

// const total = 2_000_000_000;
// const iterations = 15;
// let shared_counter = 0;

export const handler = async (req: IncomingMessage, resp: ServerResponse) => {
    console.log(`---- HTTP Method: ${req.method}, URL: ${req.url}`);
    console.log(`host: ${req.headers.host}`);
    console.log(`accept: ${req.headers.accept}`);
    console.log(`user-agent: ${req.headers['user-agent']}`);

    const parsedURL = new URL(req.url ?? '', `http://${req.headers.host}`);
    console.log(`protocol: ${parsedURL.protocol}`);
    console.log(`hostname: ${parsedURL.hostname}`);
    console.log(`port: ${parsedURL.port}`);
    console.log(`pathname: ${parsedURL.pathname}`);
    parsedURL.searchParams.forEach((val, key) => {
        console.log(`Search param: ${key}: ${val}`);
    });

    resp.end('Hello world');
};

export const isHttps = (req: IncomingMessage) : boolean => {
    return req.socket instanceof TLSSocket && req.socket.encrypted;
}

export const redirectionHandler = (req: IncomingMessage, resp: ServerResponse) => {
    resp.writeHead(302, { 'Location': 'https://localhost:5500'});
    resp.end();
}

export const notFoundHanler = (req: IncomingMessage, resp: ServerResponse) => {
    resp.writeHead(404, 'Not Found');
    resp.end();
}

export const newUrlHandler = (req: IncomingMessage, resp: ServerResponse) => {
    resp.writeHead(200, 'OK');
    resp.write('Hello, new URL');
    resp.end();
}

export const defaultHandler = (req: IncomingMessage, resp: ServerResponse) => {
    resp.writeHead(200, 'OK');
    const protocol = isHttps(req) ? 'https' : 'http';
    const parsedURL = new URL(req.url ?? '', `${protocol}://${req.headers.host}`);
    if(!parsedURL.searchParams.has('keyword')) {
        resp.write(`Hello, ${protocol.toUpperCase()}`);
    } else {
        resp.write(`Hello, ${parsedURL.searchParams.get('keyword')}`);
    }
    resp.end();
}




