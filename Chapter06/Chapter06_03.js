/*
 * ------------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/24/2022 at 09:31 PM
 *
 * Chapter06_03.js
 * Make the Group class from the previous exercise iterable. Refer to the section
 * about the iterator interface earlier in the chapter if you aren’t clear on the
 * exact form of the interface anymore.
 * 
 * If you used an array to represent the group’s members, don’t just return
 * the iterator created by calling the Symbol.iterator method on the array. That
 * would work, but it defeats the purpose of this exercise.
 * It is okay if your iterator behaves strangely when the group is modified
 * during iteration.
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

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
       
}

// Unfortunately works with integer-indices only atm;
class GroupIterator {
    constructor(group) {
        this.group = group;
        this.begin = 0;

    }

    next() {
        if (this.begin === this.group.list.length)
            return {done: true};

        let value = this.group.list[this.begin++];

        return {value, done: false};
       
    }
}


function main() {
    let group1 = new Group();
    group1.add("Hello");
    group1.add("World!");
    group1.add("My");
    group1.add("Name");
    group1.add("is");
    group1.add("Eric");


    console.log(`List result:\n${group1.list}`);

    // Now iterate through the thing:
    console.log("Iterator Result:");
    for (item of group1)
        console.log(item);   
}

// Now run the function:
main();
