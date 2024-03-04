function sayMyname(){
    console.log("m");
    console.log("a");
    console.log("n");
    console.log("a");
    console.log("v");
} 
// sayMyname()

// function assTwonumber(number1, number2) {
//          console.log(number1 + number2);
// }

function assTwonumber(number1, number2) {
//   let result = number1+number2
//   return result

     return number1 + number2
}

 const result = assTwonumber(3, 4)
//  console.log("result :", result);


// function loginuser(username){
//     if(username === undefined){
//                 console.log("please enter the username");
//                 return
//     }
//     return `${username} just logged in`
// }
// console.log(loginuser())

function calculateprice(val1, val2,...num1){
      return num1
}
// console.log(calculateprice(200, 400, 500));

const user = {
    username: "manav",
    price: 199
}

function handleObject(anyobject){
       console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(Object)
handleObject({
    username: "manav",
    price: 199
})

const mynewarray = [200, 400, 300]

function returnsecondvalue(getarry){
    return getarry[2]
}
console.log(returnsecondvalue(mynewarray));