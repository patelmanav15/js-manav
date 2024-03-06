const mynum = [1,2,3]

// const mytotal = mynum.reduce(function (acc, current) {
//     console.log(`acc: ${acc} and curreval: ${current}`);
//     return acc + current
// }, 3)

// const mytotal = mynum.reduce((acc, curr) => acc+curr, 0)

// console.log(mytotal);

const shooping = [
    {
        itemname: "js",
        price: 2999
    },
    {
        itemname: "mobile",
        price: 3999
    },
    {
        itemname: "data scince",
        price: 12999
    }
]

const pricetopay = shooping.reduce((acc, item) => acc + item.price, 0 )
console.log(pricetopay);