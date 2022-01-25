/*
 * ------------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/24/2022 at 08:33 PM
 *
 * Chapter06_02.js
 * The standard JavaScript environment provides another data structure called
 * Set. Like an instance of Map, a set holds a collection of values.
 * Unlike Map ,it does not associate other values with those—it just tracks
 * which values are part of the set. A value can be part of a set only
 * once—adding it again doesn’t have any effect.
 *
 * Write a class called Group (since Set is already taken). Like Set, it
 * has add, delete, and has methods. Its constructor creates an empty group,
 * add adds a value to the group (but only if it isn’t already a member),
 * delete removes its argument from the group (if it was a member), and has
 * returns a Boolean value indicating whether its argument is a member of
 * the group.
 *
 * Use the === operator, or something equivalent such as indexOf , to deter-
 * mine whether two values are the same.
 * 
 * Give the class a static from method that takes an iterable object as argu-
 * ment and creates a group that contains all the values produced by iterating
 * over it.
 * ------------------------------------------------------------------------------
 */

class Group {
    constructor() {
        this.list = [];
    }



    
    add(item) {
        if (!this.contains(item))
            this.list.push(item);
    }

    delete(item) {
        let index = this.has(item);
        if (index != -1)
            this.list.splice(index, 1);

    }

    // Linear search for an item:
    has(item) {
        return this.list.indexOf(item);           
    }

    contains(item) {
        let result = this.list.indexOf(item);
        return (result !== -1);
    }
    

    static from(iterator) {
        let temp_group = new Group();

        let begin = iterator.next();
        while (!begin.done) {
            temp_group.add(begin.value);
            begin = iterator.next();
        }

        return temp_group;
    }
}


function main() {
    let group1 = new Group();
    group1.add("Hello");
    group1.add("World!");
    group1.delete("Hello");

    console.log(group1.list);

    let weird_array = ["One", "2", "three", 4];

    let iterator = weird_array[Symbol.iterator]();
    
    let group2 = Group.from(iterator);
    console.log(group2.list);
    

}

// Now run the function:
main();
