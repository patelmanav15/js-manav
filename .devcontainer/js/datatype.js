// datatype
// primitive
// 7datatype : string , number, boolean, null, undefined, symbol, bigint

// Reference (Non primitive)

// Array, object, Functions

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsidetemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bignumber = 3434343n

const heros = ["shaktiman", "naagraj", "doga"];
let obg = {
              name: "manav",
              age: 20,
}
const myFunction = function(){
    console.log("hello manav");
}

console.log(typeof myFunction);

// stack (Primitive), Heap(Non-Primitive)

let myname = "manav"
let anothername = myname
anothername = "chaicode"

console.log(myname);
console.log(anothername);

let user = {
      email: "username.com",
      upi: "user@upi"

}
let userTwo = user

userTwo.email = "manav@gmail.com"

console.log(user.email);
console.log(userTwo.email);