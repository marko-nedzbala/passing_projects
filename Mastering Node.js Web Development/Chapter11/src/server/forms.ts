import express, { Express } from 'express';
import { getValidationResults, validate } from './validation';
// import multer from 'multer';
// const fileMiddleware = multer({storage: multer.memoryStorage()});

export const registerFormMiddleware = (app: Express) => {
    app.use(express.urlencoded({extended: true}));
}

// export const registerFormRoutes = (app: Express) => {
//     app.get('/form', (req, resp) => {
//         for (const key in req.query) {
//             resp.write(`${key}: ${req.query[key]}\n`);
//         }
//         resp.end();
//     });

//     app.post("/form", fileMiddleware.single('datafile'), (req, resp) => {
//         // resp.write(`Content-Type: ${req.headers['content-type']}\n`);
//         // // if(req.headers['content-type']?.startsWith('multipart/form-data')) {
//         // //     req.pipe(resp);
//         // // } else {
//         // for(const key in req.body) {
//         //     resp.write(`${key}: ${req.body[key]}\n`);
//         // }

//         // if(req.file) {
//         //     resp.write(`---\nFile: ${req.file.originalname}\n`)
//         //     resp.write(req.file.buffer.toString());
//         // }
//         // resp.end();
//         // // }
//         resp.render('formData', {
//             ...req.body, file: req.file, fileData: req.file?.buffer.toString()
//         });
        
//     });
// }

export const registerFormRoutes = (app: Express) => {
    app.get('/form', (req, resp) => {
        resp.render('age', { helpers: { pass }});
    });

    // app.post('/form', (req, resp) => {
    //     resp.render('age', {
    //         ...req.body, nextage: Number.parseInt(req.body.age) + 1
    //     });
    // });
    app.post('/form', 
        validate('name').required().minLength(5),
        validate('age').isInteger(),
        (req, resp) => {
            const validation = getValidationResults(req);
            const context = { ...req.body, validation, helpers: { pass }};

            if(validation.valid) {
                context.nextage = Number.parseInt(req.body.age) + 1;
            }
            resp.render('age', context);
        });
}

const pass = (valid: any, propname: string, test: string) => {
    let propResult = valid?.results?.[propname];
    return `display:${!propResult || propResult[test] ? 'none': 'block'}`;
}


