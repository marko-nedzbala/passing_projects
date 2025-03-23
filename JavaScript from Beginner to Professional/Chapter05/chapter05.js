
let car = {
    model: 'Golf',
    make: 'Volkswagen',
    year: 1999,
    color: 'black',
};

// using a for-in loop
for (let prop in car) {
    console.log(prop);
}

console.log('\n');

let arrKeys = Object.keys(car);
console.log(arrKeys);

for (let key of Object.keys(car)) {
    console.log(key);
}

console.log('\n');

for(let key of Object.values(car)) {
    console.log(key);
}

console.log('\n');

let arrKeys1 = Object.keys(car);
for(let i =0; i < arrKeys1.length; i++) {
    console.log(arrKeys1[i] + ': ' + car[arrKeys1[i]]);
}

console.log('\n');

// prints both arrays
let arrEntries = Object.entries(car);
console.log(arrEntries);

console.log('\n');

// return a 2-dimensional array
for(const [key, value] of Object.entries(car)) {
    console.log(key, ':', value);
}


































