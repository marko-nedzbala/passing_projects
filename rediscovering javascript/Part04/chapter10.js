// Chapter10

const computeSqrtAsync = function(number) {
    if(number < 0) {
        return Promise.reject('no negative number please');
    }
    if (number === 0) {
        return Promise.resolve(0);
    }
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(Math.sqrt(number)), 1000);
    });
};

const reportOnPromise = function(promise) {
    promise
        .then(result => console.log(`result is ${result}.`))
        .catch(error => console.log(`ERROR: ${error}`));
};

const forNegative1 = computeSqrtAsync(-1);
const forZero = computeSqrtAsync(0);
const forSixteen = computeSqrtAsync(10);

reportOnPromise(forNegative1);
reportOnPromise(forZero);
reportOnPromise(forSixteen);

const fs = require('fs');
const fsPromises = require('fs').promises;

const countLinesWithText = function(pathToFile) {
    fs.promises.readFile(pathToFile)
        .then(content => content.toString())
        .then(content => content.split('\n'))
        .then(lines => lines.filter(line => line.includes('THIS LINE')))
        .then(lines => lines.length)
        .then(count => checkLineExists(count))
        .then(count => console.log(`Number of lines with THIS LINE is ${count}`))
        .catch(error => console.log(`ERROR: ${pathToFile}, ${error.message}`));
};

const checkLineExists = function(count) {
    if(count === 0) {
        throw new Error('text does not exist in file');
    }
    return count;
}



const createPromise = function(timeInMillis) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(timeInMillis), timeInMillis);
    });
}
const createTimeout = function(timeInMillis) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => reject(`timeone after ${timeInMillis} MS`), timeInMillis);
    });
};
Promise.race([createPromise(1000), createPromise(2000), createTimeout(3000)])
    .then(result => console.log(`completed after ${result} MS`))
    .catch(error => console.log(`ERROR: ${error}`));
Promise.race([createPromise(3500), createPromise(4000), createTimeout(2000)])
    .then(result => console.log(`completed after ${result} MS`))
    .catch(error => console.log(`ERROR: ${error}`));


// const cluster = require('cluster');
// const http = require('http');
// const url = require('url');
// const querystring = require('querystring');
// const port = 8084;
// const number_of_processes = 8;

// const isPrime = function(number) {
//     for(let i = 2; i < number; i++) {
//         if(number % i === 0) {
//             return false;
//         }
//     }
//     return number > 1;
// };

// const countNumberOfPrimes = function(number) {
//     let count = 0;
//     for(let i = 1; i <= number; i++) {
//         if(isPrime(i)) {
//             count++;
//         }
//     }
//     return count;
// };

// const handler = function(request, response) {
//     const params = querystring.parse(url.parse(request.url).query);
//     const count = countNumberOfPrimes(number);
//     response.writeHead(200, { 'Content-Type': 'text/plain'});
//     return response.end(`${count}`);
// };

// if(cluster.isMaster) {
//     for(let i = 0; i < number_of_processes; i++) {
//         cluster.fork();
//     }
// } else {
//     http.createServer(handler).listen(port);
// }

// const countPrimes = function(number) {
//     if(isNaN(number)) {
//         return Promise.reject(`'${number}' is not a number`);
//     }
//     return request(`http://localhost:8084?number=${number}`)
//     .then(count => `Number of primes from 1 to ${number} is ${count}`);
// };