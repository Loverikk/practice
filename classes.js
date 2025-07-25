class Vehicle {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year
    }

    getInfo() {
        return `Brand: ${this.brand}, Year: ${this.year} `
    }
}

class Car extends Vehicle {
    constructor(brand, model, year) {
        super(brand, year)
        this.model = model
    }

    getCarInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
    }

    static compareAge(car1, car2) {
        if (car1.year > car2.year) {
            return car1
        } else {
            return car2
        }
    }
}

class BankAccount {
    #balance = 0

    deposit(amount) {
        this.#balance += amount
    }

    get getBalance() {
        return this.#balance
    }
}

class Person {
    static instanceCount = 0;

    constructor(name) {
        Person.instanceCount++;
        this.name = name
    }

    static getInstanceCount() {
        return Person.instanceCount;
    }
}

class Counter {
    #counter = 0;

    inc() {
        this.#counter++
        return this
    }

    dec() {
        this.#counter--
        return this
    }

    get value() {
        return this.#counter;
    }

}

class User {
    constructor(username, role) {
        this.username = username;
        this.role = role;
    }

    describe() {
        return `User ${this.username} has role ${this.role}`;
    }
}

class Admin extends User {
    constructor(username) {
        super(username, 'admin');
    }

    describe() {
        return `Admin: ${super.describe()}`;
    }
}

class Rectangle {
    #width
    #height

    constructor(height, width) {
        this.width = width
        this.height = height
    }

    get height() {
        return this.#height
    }

    get width() {
        return this.#width
    }

    set height(number) {
        if (typeof number !== 'number') {
            throw new Error('Type in the correct number')
        }

        this.#height = number
    }

    set width(number) {
        if (typeof number !== 'number') {
            throw new Error('Type in the correct number')
        }

        this.#width = number
    }

    getArea() {
        return this.#width * this.#height
    }

    static isEqual(rec1, rec2) {
        return rec1.getArea() === rec2.getArea()
    }
}

class Stock {
    constructor(symbol, shares, price) {
        this.symbol = symbol
        this.shares = shares
        this.price = price
    }

}

class Portfolio {
    constructor() {
        this.stockVault = []
    }

    addStock(stock) {
        this.stockVault.push(stock)
    }

    getTotalValue() {
        return this.stockVault.reduce((acc, cur) => acc + cur.price, 0)
    }
}

//Case1
const obj1 = { a: 1, b: 2, c: 3 }
const result = Object.fromEntries(Object.entries(obj1).filter(item => item[1] % 2 === 0))

const obj2 = { a: 1, b: 2 }
const result2 = Object.fromEntries(Object.entries(obj2).map(item => [item[1], item[0]]))

function swap(obj) {
    return Object.fromEntries(Object.entries(obj).map(item => [item[1], item[0]]))
}

function frequency(str) {
    const arr = str.split('')
    const strSet = new Set(arr)
    const result = {}

    for (let char of arr) {
        result[char] = 0
    }

    for (let char of arr) {
        if (strSet.has(char)) {
            result[char] += 1
        }
    }

    return result
}

function wordLengthFrequency(str) {
    const arr = str.split(' ')  
    const freq = {}

    for (let word of arr) {
        freq[word.length] = (freq[word.length] || 0) + 1
    }

    return freq
}