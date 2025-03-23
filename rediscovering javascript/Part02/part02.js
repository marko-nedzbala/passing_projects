
// Chapter04
console.log('Chapter04');

const names = ['Sara', 'Jake', 'Pete', 'Mark', 'Jill'];
for(const name of names) {
    console.log(name)
}

console.log();

for(const entry of names.entries()) {
    console.log(entry);
}

console.log();

for(const [i, name] of names.entries()) {
    console.log(i + '--' + name);
}

const age = Symbol('ageValue');
const email = 'emailValue';

const sam = {
    first: 'Sam',
    [email]: 'sam@example.com',
    [age]: 2
};
for(const property in sam) {
    console.log(property + ' : ' + sam[property]);
}
console.log('list of property names: ');
console.log(Object.getOwnPropertyNames(sam));

class SuperHero {
    constructor(name, realName) {
        this.name = name;
        this.realName = realName;
    }
    toString() { return this.name; }
    [Symbol.search](value) {
        console.info('this: ' + this + ' , value: ' + value);
        return value.search(this.realName);
    }
}

const superHeroes = [
    new SuperHero('Superman', 'Clark Kent'),
    new SuperHero('Batman', 'Bruce Wayne'),
    new SuperHero('Ironman', 'Tony Stark'),
    new SuperHero('Spiderman', 'Peter Parker'),
];
const names2 = 'Peter Parker, Clark Kent, Bruce Wayne';
for (const superHero of superHeroes) {
    console.log(`Result of search: ${names2.search(superHero)}`);
}


// Chapter05
class CardDeck {
    constructor() {
        this.suitShapes = ['Clubs', 'Diamonds', 'Hearts', 'Spaces'];
    }
    *suits() {
        for(const shape of this.suitShapes) {
            yield shape;
        }       
    }
}
const deck = new CardDeck();
for (const card of deck.suits()) {
    console.log(card);
}

const isPrime = function(number) {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) return false;
    }
    return number > 1;
}
const primeStartingForm = function*(start) {
    let index = start;
    while(true) {
        if(isPrime(index)) yield index;
        index++;
    }
}

for(const number of primeStartingForm(10)) {
    process.stdout.write(number + ', ');
    if(number > 25) break;
}








// Chapter06
































