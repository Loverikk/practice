function sumArray(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0)
}

function removeDuplicates(arr) {
    return Array.from(new Set(arr))
}

function findMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    }
}

function flattenOnce(arr) {
    return arr.flat(1)
}

function intersect(arr1, arr2) {
    const set1 = new Set(arr1)
    const set2 = new Set(arr2)
    const result = []
    for (let item of set1) {
        if (set2.has(item) && !result.includes(item)) {
            result.push(item)
        }
    }

    return result
}

function sortArr(arr, prop) {
    return arr.sort(a, b => a[prop] - b[prop])
}