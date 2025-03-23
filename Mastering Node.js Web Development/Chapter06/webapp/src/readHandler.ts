import { IncomingMessage, ServerResponse } from "http";
import { Transform } from "stream";

export const readHandler = async (req: IncomingMessage, resp: ServerResponse) => {
    // req.setEncoding('utf-8');

    // req.on('data', (data: string) => {
    //     console.log(data);
    // });

    // req.on('end', () => {
    //     console.log('End: all data read');
    //     resp.end();
    // });
    
    // for await(const data of req) {
    //     console.log(data);
    // }
    // console.log('End: all data read');

    // resp.end();

    // req.pipe(resp);

    // req.pipe(createLowerTransform()).pipe(resp);

    if(req.headers['content-type'] == 'application/json') {
        req.pipe(createFromJsonTransform()).on('data', (payload) => {
            if(payload instanceof Array) {
                resp.write(`Received an array with ${payload.length} items`);
            } else {
                resp.write('Did not receive an array');
            }
            resp.end();
        });
    } else {
        req.pipe(resp);
    }
}


const createFromJsonTransform = () => new Transform({
    readableObjectMode: true,
    transform(data, encoding, callback) {
        callback(null, JSON.parse(data));
    }
});





const createLowerTransform = () => new Transform({
    transform(data, encoding, callback) {
        callback(null, data.toString().toLowerCase());
    }
});


