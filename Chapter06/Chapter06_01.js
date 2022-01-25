/*
 * ------------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/24/2022 at 08:05 PM
 *
 * Chapter06_01.js
 * Write a class Vec that represents a vector in two-dimensional space.
 * It takes x and y parameters (numbers), which it should save to properties
 * of the same name.
 *
 * Give the Vec prototype two methods, plus and minus , that take another
 * vector as a parameter and return a new vector that has the sum or difference
 * of the two vectors’ ( this and the parameter) x and y values.
 * Add a getter property length to the prototype that computes the length
 * of the vector—that is, the distance of the point (x, y) from the origin (0, 0). 
 * ------------------------------------------------------------------------------
 */

class Vector {

    constructor(x_val, y_val) {
        this.x_val = x_val;
        this.y_val = y_val;
    }

    /**
      * Get the length of a vector through a the distance formula.
      */
    length() { return Math.sqrt((this.x_val * this.x_val) + (this.y_val * this.y_val)); }

    /**
       Add two vectors and return their sum.
     */
    plus(vector2) {
        new_x_val = this.x_val + vector2.x_val;
        new_y_val = this.y_val + vector2.y_val;

        return new Vector(new_x_val, new_y_val);       
    }


    minus(vector2) {
        new_x_val = this.x_val - vector2.x_val;
        new_y_val = this.y_val - vector2.y_val;

        return new Vector(new_x_val, new_y_val);
    }
    
}


function main() {
    let vector = new Vector(10, 10);
    console.log(vector.length());


}


// Now run
main();
