const name = "manav"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repocount is ${repocount} `);

const gamename = new String('manav-hc-com')

// console.log(gamename[0]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(2));
console.log(gamename.indexOf('v'));

const newstring = gamename.substring(0, 4)
console.log(newstring);

const anotherstring = gamename.slice(-8, 4)
console.log(anotherstring);

const newStringone = "  manav  "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://manav.com/manab%20patel" 
console.log(url.replace('20', '-')); 
console.log(url.includes('sut'));

console.log(gamename.split('-'));