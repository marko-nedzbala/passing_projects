import { IncomingMessage, ServerResponse } from "http";
// import { readFile } from 'fs';
import { readFile } from 'fs/promises';
import { Worker } from "worker_threads";

// export const handler = async (req: IncomingMessage, res: ServerResponse) => {
//     try {
//         const data: Buffer = await readFile('data.json');
//         res.end(data, () => console.log('File sent'));
//     } catch (err: any) {
//         console.log(`Error: ${err?.message ?? err}`);
//         res.statusCode = 500;
//         res.end();
//     }
// };

const total = 2_000_000_000;
const iterations = 5;
let shared_counter = 0;

export const handler = async (req: IncomingMessage, res: ServerResponse) => {
    const request = shared_counter++;
    const worker = new Worker(__dirname + '/count_worker.js', {
        workerData: {
            iterations, total, request
        }
    });


}
