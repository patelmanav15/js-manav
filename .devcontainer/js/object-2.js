// const tiner = new Object()
const tiner = {}
tiner.indexOf = "123abc"
tiner.name = "manav"
tiner.isLoggedIn = false

// console.log(tiner);

const regular = {
    email: "patelmanav.com" ,
    fullname: {
                userfullname: {
                            firstname: "patel" ,
                            lastname: "manav"
                }
    }
}
// console.log(regular.fullname.userfullname);

const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({} ,obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

console.log(tiner);
console.log(Object.values(tiner));

console.log(tiner.hasOwnProperty('isLoggedIn'));