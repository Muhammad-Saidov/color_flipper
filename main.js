/* function sum(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function operation(x, y, func) {
    const result = func(x, y);
    console.log(`Результат операции: ${result}`);
    
    if (x>0 && y>0) {
        console.log("Отрицательных значение");
    }
}

console.log("Sum");
operation(5, 3, sum); 
operation(-20,5,sum);
console.log("subtract");
operation(10, 4, subtract);
console.log("divide");
operation(20, 4, multiply);
 */

const { get } = require("lodash");

 


/* class Car{
    name;
    color;
    brend;
}
const car1 = new Car();
car1.name = "Model S";
car1.color = "Red";
car1.brend = "Tesla";
console.log(car1.name);
console.log(car1.color);
console.log(car1.brend);

 */


/* class User {
    name;
    age;
    email;

}
    const user1 = new User()
        user1.name = "John Doe";
        user1.age = 30;
        user1.email = "johndoe@gmail.com";
        console.log(user1.name);
        console.log(user1.age);
        console.log(user1.email);

     */



/* class Person {
    name;
    age;
    move(place){
        console.log(`Go to ${place}`);
    }
}
const person1 = new Person();
person1.move = "Hospital";
person1.move = "cinema";
person1.eat(); 

console.log(person1.move);
console.log(person1.eat);
 */






/* class Person {
    name;
    age;
    constructor(personName, personAge) {
        this.name = personName;
        this.age = personAge;
    }
    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const tom = new Person("Tom", 25);
tom.print();
const jerry = new Person("Jerry", 30);
jerry.print(); */






/* class Car {
    name;
    year_car;
    color;
    constructor(name, year_car, color) {
        this.name = name;
        this.year_car = year_car;
        this.color = color;
    }
    print() {
        console.log(`Name: ${this.name}, Year: ${this.year_car}, Color: ${this.color}`);
    }

    start() {
        console.log(`Машина ${this.name} заведена`);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year_car;
    }

}
const car1 = new Car("opel-vectra", 1994, "blue");
car1.print();
car1.start();
console.log(`Возраст машины: ${car1.getAge()} лет`);

 */






class  BankAccount {
    name;
    #balance;

    constructor(name,balance) {
        this.name = name;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }
  
    deposit(amous){
        if (amous > 0) {
            this.#balance += amous;
            console.log(`Депозит: ${amous}, Текущий баланс: ${this.#balance}`);
        } else {
            console.log("Сумма депозита должна быть положительной");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Снятие: ${amount}, Текущий баланс: ${this.#balance}`);
        } else {
            console.log("Недостаточно средств или неверная сумма снятия");
        }
    }


}

const account1 = new BankAccount("John Doe", 1000);
console.log(account1.name);
console.log(account1.getBalance());

account1.deposit(100);
account1.withdraw(200);





