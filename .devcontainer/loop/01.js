for (let i = 0; i <=10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}
// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value: ${j}`);
//         console.log(i + '*'+ j + '=' + i*j);
        
//     }
    
// }

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("deteced");
//         break
//     }
//    console.log(`value is : ${index}`);
    
// }
    
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("deteced");
        continue
    }
   console.log(`value is : ${index}`);
    
}
    
