const coding = ["js","java","cpp","python"]

// coding.forEach(function (item) {
//     console.log(item);
// } )

// coding.forEach((value) => {
//     console.log(value);
// })

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme())

// coding.forEach( (item, index, arr) => {
//     console.log(item,index,arr);
// })

const mycoding = [
    {
        langugename: "js",
        langugefile: "js1"
    },
    {
        langugename: "java",
        langugefile: "java"
    },
    {
        langugename: "python",
        langugefile: "ph"
    }
]

mycoding.forEach((item) => {
    console.log(item.langugename);
})