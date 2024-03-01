//  dates
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);

// let mycreat = new Date(2023, 0, 23)
// let mycreat = new Date(2023, 0, 23, 5, 3)
// let mycreat = new Date("2023-01-14")
let mycreat = new Date("01-04-2023")
console.log(mycreat.toLocaleString());

let myTimeStamp = Date.now() 
// console.log(myTimeStamp);
// console.log(mycreat.getTime());
// console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getDay());

