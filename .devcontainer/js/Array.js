const myarray = [0,1,2,3,4,5,"manav"]
// console.log(myarray[0]);
const myhero = ["madara", "naruto"]

const myarray2 = new Array(1,2,3,4)
console.log(myarray[1]);

// Array method

// myarray.push(6)
// myarray.pop()

// myarray.unshift(5)
// myarray.shift()

// console.log(myarray.includes(9));
// console.log(myarray.indexOf(3));

// const newArr = myarray.join()
// console.log(myarray);
// console.log(typeof newArr);


// Slice, splice

console.log("A", myarray);
const myn1 = myarray.slice(1,3)

console.log(myn1);
console.log("b", myarray);

const myn2 = myarray.splice(1,3)
console.log("c", myarray);
console.log(myn2);