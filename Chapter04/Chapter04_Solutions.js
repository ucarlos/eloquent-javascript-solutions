/*
 * ------------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/12/2022 at 10:26 PM
 *
 * Chapter04_Solutions.js
 *
 * ------------------------------------------------------------------------------
 */


// -8, -1 = -1 + 8 = 7

function range(minValue, maxValue) {
    // Handle Reversed values:
    if (maxValue < minValue)
        throw new RangeError(`Error: maxValue (${maxValue}) must be greater than minValue (${minValue})`);

    // Now get the range size:

    let size = (Math.abs(maxValue) - Math.abs(minValue)) + 1;

    // Now generate a Array with length size:
    let list = Array(size);

    for (let i = 0; i < size; i++) {
        list[i] = minValue + i;
    }

    return list;
}

function sum(list) {
    let sum = 0;
    for (const item of list)
        sum += item;

    return sum;
}

function run_example() {
    let list = range(1, 5);

    for (const i of list)
        console.log(`${i}\n`);

}

function arrayIsEqual(array1, array2) {
    if (array1 === null || array2 === null)
        throw new TypeError("Error: Cannot have a null parameter.");

    if (array1.length !== array2.length)
        return false;


    // Otherwise compare its contents:        
    for (let i = 0; i < array1.length; i++)
        if (array1[i] !== array2[i])
            return false;

    return true;
}

function deepEqual(firstItem, secondItem) {

    // Handle if any parameters are null:
    if (firstItem === null || secondItem === null)
        return false;

    // Now then, check if any
    if (typeof (firstItem) !== "object" || typeof (secondItem) !== "object")
        return false;
    else {

        // Do Deep Comparison:
        if (!arrayIsEqual(Object.keys(firstItem), Object.keys(secondItem)))
            return false;

        // Now compare its value:

        return arrayIsEqual(Object.values(firstItem), Object.values(secondItem));
    }
}

function main() {
    let list = range(1, 5);

    for (const i of list)
        console.log(`${i}`);

    let firstTuple = {
        first: "Ulysses",
        last: "Carlos",
        age: 24
    };

    let secondTuple = {
        first: "Daniel",
        last: "Carlos",
        age: 20
    };

    let thirdTuple = {
        first: "Ulysses",
        last: "Carlos",
        age: 24
    };

    console.log(`Are firstTuple and secondTuple the same? ${deepEqual(firstTuple, secondTuple)}`);
    console.log(`Are firstTuple and thirdTuple the same? ${deepEqual(firstTuple, thirdTuple)}`);

}
main();
