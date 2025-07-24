function greet(name = "Guest") {
    return `Hello, ${name}`
}

function makeMultiplier(factor) {
    return (number) => {
        return number * factor
    }
}

function sumAll() {
    return Array.from(arguments).reduce((acc, cur) => acc + cur, 0)
}

function factorial(num) {
    if (num === 1) {
        return 1
    }

    return factorial(num - 1) * num
}

function filterAndScquare(arr) {
    return arr.filter(num => num % 2 === 0).map(num => Math.pow(num, 2))
}

function stringJoin(arr) {
    const result = arr.reduce((acc, cur) => acc + cur + '-', '')

    return result.slice(0, result.length - 1)
}

async function waitAndGreet() {
    setTimeout(() => {
        console.log('Hi')
    }, 1000)
}

function addOne(n) {
    return n + 1;
}

function double(n) {
    return n * 2;
}

function compose(fun1, fun2) {
    return function (num) {
        return fun2(fun1(num))
    }
}

const addOneAndDpuble = compose(addOne, double)

console.log(addOneAndDpuble(4))