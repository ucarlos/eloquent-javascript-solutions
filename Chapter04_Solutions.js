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

    let size = Math.abs(maxValue) - Math.abs(minValue);

    // Now generate a Array with length size:
    let list = Array(size);

    for (let i = 0; i < size; i++) {
	    list[i] = minValue + i;
    }

    return list;
}

function sum

function main() {
    let list = range(1, 5);

    for (const i of list)
        console.log(`${i}\n`);
    

}

main();