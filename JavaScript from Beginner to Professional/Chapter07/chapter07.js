
class Person {
    // private properties
    #firstname;
    #lastname;

    constructor(firstname, lastname) {
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
    greet() {
        console.log(`Hi ${this.#firstname}`);
    }
    // accessors
    // getter
    get firstname() {
        return this.#firstname;
    }
    // setter
    set firstname(firstname) {
        this.#firstname = firstname;
    }
}

let p = new Person('Bob', 'Smith');
p.greet();
// set the property
p.firstname = 'James';
// get the property
console.log(p.firstname);


















































