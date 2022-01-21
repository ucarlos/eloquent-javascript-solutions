/*
 * ------------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/20/2022 at 10:40 PM
 *
 * Everything.js
 *
 * Analogous to the some method, arrays also have an every method.
 * This one returns true when the given function returns true for every
 * element in the array. In a way, some is a version of the || operator that
 * acts on arrays, and every is like the && operator.
 * 
 * Implement every as a function that takes an array and a
 * predicate function as parameters. Write two versions, one using a
 * loop and one using the some method.
 * ------------------------------------------------------------------------------
 */


function every(array, predicate) {
    for (let item of array) {
        if (!predicate(item))
            return false;
    }
    
    return true;
    
}


function main() {
    let list = [2, 3, 4, 5, 6, 7];
    
    console.log(`Is every item in this list greater than 3? ${every(list, (item) => item > 3)}`);
    console.log(`Is every item in this list lower than 8? ${every(list, (item) => item < 8)}`);      
}

// Now run the damn thing
main();
