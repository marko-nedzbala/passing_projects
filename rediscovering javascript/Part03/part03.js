// Chapter07
const mine = 'mine';
class Car {
    constructor(year) {
        this.year = year;
        this[mine] = 'mine';
    }

    drive(distance) {
        this.miles += distance;
    }
    get age() {
        return new Date().getFullYear() - this.year;
    }
    static myStatic() {
        console.log('Class method');
    }


}

console.log(new Car(2018));

c = new Car(2018, mine);
console.log(Car.myStatic());

const createClass = function(...fields) {
    return class {
        constructor(...values) {
            fields.forEach( (field, index) => this [field] = values[index] );
        }
    };
};






// Chapter08

class Counter {}
const counter1 = new Counter();
const counter2 = new Counter();

const counter1Prototype = Reflect.getPrototypeOf(counter1);
const counter2Prototype = Reflect.getPrototypeOf(counter2);

console.log(counter1 === counter2);
console.log(counter1Prototype === counter2Prototype);


















// Chapter09














