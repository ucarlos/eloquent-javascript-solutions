/*
 * ------------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/20/2022 at 10:18 PM
 *
 * Flattening.js
 * Use the reduce method in combination with the concat method
 * to “flatten” an array of arrays into a single array that has all the
 * elements of the original arrays.
 * ------------------------------------------------------------------------------
 */


// Basically an accumulator, where combine is a lambda function that combines
// elements
function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }

    return current;
}


function main() {
    let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    let lambda = function(a, b) {
        for (let item of b)
            a.push(item);
        return a;
    };

    console.log(reduce(array, lambda, []));

}    

// Run the application
main();
