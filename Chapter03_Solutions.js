/*
 * ------------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/25/2021 at 11:01 PM
 *
 * Chapter03_Solutions.js
 *
 * ------------------------------------------------------------------------------
 */


function min(a, b) {
    return (a < b)? a : b;
}


function isEvenRecursive(number) {
    // Handle negative values:
    if (number < 0)
	number = Math.abs(number);

    if (number === 0)
	return true;
    else if (number === 1)
	return false;
    else return isEvenRecursive(number - 2);    
}

function countChar(string=null, search=null) {
    // String or character can be undefined or null
    if (string === null || search === null)
	throw TypeError("Cannot have a null string or character.");
    
    let count = 0;
    const length = string.length;
    for (let i = 0; i < length; i++) {
	if (string[i] === search)
	    count++;
    }
	

    return count;    
}


function main() {
    console.log("Simple Min test:");
    const a = 11;
    const b = 18;
    const c = -123;
    console.log(`a: ${a}\tb: ${b}\tMin value: ${countChar(a, b)}`);

    console.log("Simple Recursive function:\n");
    console.log(`Is the 'a' variable even? ${isEvenRecursive(a)}`);
    console.log(`Is the 'b' variable even? ${isEvenRecursive(b)}`);
    console.log(`Is the 'c' variable even? ${isEvenRecursive(c)}`);

    let search_char = 'a';
    string1 = "The quick brown fox jumps over the lazy dog.";
    console.log(`Occurances of \'${search_char}\' in \"${string1}\": ${countChar(string1, search_char)}`);

}

// Now run main:
main();
