/*
 * ------------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/20/2022 at 10:46 PM
 *
 * Chapter05_02.js
 * Write a higher-order function loop that provides something like a for loop
 * statement. It takes a value, a test function, an update function, and a body
 * function. Each iteration, it first runs the test function on the current loop
 * value and stops if that returns false. Then it calls the body function,
 * giving it the current value. Finally, it calls the update function to create
 * a new value and starts from the beginning.
 * 
 * When defining the function, you can use a regular loop to do the actual
 * looping.
 * ------------------------------------------------------------------------------
 */


function loop(value, testPredicate, updatePredicate, bodyPredicate) {
    while (testPredicate(value)) {
        bodyPredicate(value);
        value = updatePredicate(value);
    }
}


function main() {
    let list = [1, 2, 3, 4, 5];

    loop(0, (value) => value < list.length, (value) => value + 1, (value) => console.log(value));
}

// Now run the program:
main();
