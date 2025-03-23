
let promise = new Promise(function (resolve, reject) {
    let x = 20;
    if (x > 10) {
        resolve(x);
    } else {
        reject('Too low');
    }
});

promise.then(
    function (value) {
        console.log('Success:', value);
    },
    function (error) {
        console.log('Error:', error);
    }
);































































