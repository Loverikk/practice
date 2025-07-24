function getInitials(name) {
    const nameArr = name.split(" ")

    return `${nameArr[0].slice(0, 1).toUpperCase()} ${nameArr[1].slice(0, 1).toUpperCase()}`
}

function longestWord(sentence) {
    const arr = sentence.split(' ')

    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > result.length) {
            result = arr[i]
        }
    }

    return result
}

function truncate(word, len) {
    return word.length > len ? `${word.slice(0, len)}...` : word;
}

function replaceAll(origin, what, wit) {
    return origin.replaceAll(what, wit)
}

function toCamelCase(sentence) {
    return sentence.replaceAll('_', ' ').split(' ').map((item, index) => {
        if (index === 0) {
            return item
        } else {
            return `${item.charAt(0).toUpperCase()}${item.slice(1)}`
        }
    }).join('')
}

function countChar(word, letter) {
    return word.split('').reduce((acc, cur) => cur === letter ? acc + 1 : acc, 0)
}

function cleanSpaces(sentence) {
    return sentence.trim().split(/\s+/).join(' ');
}

function firstNonRepeatedChar(word) {
    const workingArr = word.split('')
    for (let i = 0; i < workingArr.length; i++) {
        let counter = 0
        for (let j = 0; j < workingArr.length; j++) {
            if (i !== j && workingArr[j].toLowerCase() === workingArr[i].toLowerCase()) {
                counter++
            }
        }
        if (counter === 0) {
            return workingArr[i]
        }
    }
}