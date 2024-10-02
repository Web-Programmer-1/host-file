const product = [
    {id:1, name: "samsung", price : 120000},
    {id:2, name: "lenavo", price : 140000},
    {id:3, name: "Iphone", price : 160000},
    {id:4, name: "Mac user", price : 180000},
    {id:5, name: "gaming pc", price : 190000},
]


// const item = product.filter(p => p.price > 140000  )
// console.log(item);
// const product = [
//     {id: 1, name: "samsung", price: 120000},
//     {id: 2, name: "lenavo", price: 140000},
//     {id: 3, name: "Iphone", price: 160000},
//     {id: 4, name: "Mac user", price: 180000},
//     {id: 5, name: "gaming pc", price: 190000},
// ];

// const item = product.filter(p => p.price > 140000).map(p => {
//     return {...p, message: "I found my high rated product"};
// });

// console.log(item);

const demo = product.find(p => p.price === 140000
);

console.log(demo);