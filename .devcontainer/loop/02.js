//for loop
const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}
const greeting = "hello wold"
for (const greet of greeting) {
    // console.log(`each character is ${greet}`);
}

// -------- MAP---------

const map = new Map()
map.set('In', "india")
map.set('usa', "united state of america")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const myobject = {
//     'game': 'NFS',
//     'game2': 'pubg'
// }
// for (const [key, value] of myobject) {
//     console.log(key,':-',value);
// }