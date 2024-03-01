// singlton 
// object literals

const mysyn = Symbol("key1")

const jsuser = {
    name: "manav" ,
    "full name": "patel manav" ,
    [mysyn]: "mykey1" ,
    age: 18 ,
    location: "jaipur" ,
    email: "manav@gmail.com" , 
    isLogged: false ,
    lastLoginDay: ["monday", "sunday"]

}
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log( jsuser[mysyn]);

jsuser.email = "patelmanav@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "oatelmanavgoogle"
console.log(jsuser);

jsuser.greeting = function(){
      console.log(`hello world, ${this.age}`);
}
console.log(jsuser.greeting());