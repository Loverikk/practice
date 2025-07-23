function a(arr) {
    let newArr = []
    for (let item of arr) {
        if (item % 2 === 0) {
            newArr.push(item)
        }
    }

    return newArr
}

for (let i = 0; i < 16; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}

function count(arr) {
    let sum = 0;

    for (let item of arr) {
        sum += item
    }

    return sum
}

function charCounter(str) {
    let string = str.split('')
    let resObj = {}

    for (let char of string) {
        if (resObj?.[char]) {
            resObj[char]++
        } else {
            resObj[char] = 1
        }
    }

    return resObj
}

function minmax(arr) {
    let min = arr[0]
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }

        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return {
        max,
        min
    }
}

function reverse(arr) {
    let finArr = []
    for (let i = 0; i < arr.length; i++) {
        finArr.push(arr[arr.length - 1 - i])
    }

    return finArr
}

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

// For...in

let finScore = 0

for (let person in scores) {
    finScore += scores[person]
}

let result = {}

for (let prop in user) {
    result[prop.toUpperCase()] = user[prop]
}


function studentsScore(obj) {
    for (let prop in obj) {
        let sum = 0
        for (let subj of obj[prop]) {
            sum += subj.score
        }

        console.log(`${prop} has a total score ${sum}`)
    }
}

function listOfClasses(obj) {
    const list = []

    for (let stud in obj) {
        for (let subj of obj[stud]) {
            if (!list.includes(subj.subject)) {
                list.push(subj.subject)
            }
        }
    }

    return list
}
