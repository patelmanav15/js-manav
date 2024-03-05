const useremail = "patelmanav.ai"
if (useremail){
    console.log("got user email");
} else {
    console.log("dont allow to loggin");
}

// false value 
// false, 0, -0, BigInt 0n, "", null, undefined, nun

// true value 
// "0", 'false', "",[] , {}, function(){}

const emptyobg = {}
if(Object.keys(emptyobg).length === 0){
    console.log("object is empty");
}

// Nullish coalescing Operator
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 25
console.log(val1);

// Tarniary Opreator

const ice = 100
ice <= 80 ? console.log("less than 80") : console.log("more than 80");