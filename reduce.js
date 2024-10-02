const numbers = [1, 2,234, 345, 634, 3, 4, 5];

// // reduce() ব্যবহার করে সংখ্যা যোগফল বের করা
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0); // 0 হল প্রাথমিক মান

// console.log(sum); // 15

const num = numbers.reduce((accumolotor , intilize) => {
    const demo = accumolotor + intilize ;
    return demo
})

// console.log(num);


const numberArray = [1, 2, 3, 4, 5, 6, 7];

const reduceContainer = numberArray.reduce((previous, current) =>{
    const result = previous + current ;
    return result
})

// console.log(reduceContainer);

  
//   const  itemcontainer = cartItems.reduce((shop, item ) => {
//     const product = shop + item.price ;
//     return product;
//   }, 0);
//   console.log(itemcontainer);
  
const cartItems = [
    { name: 'Laptop', price: 300 },
    { name: 'Phone', price: 400 },
    { name: 'Headphones', price: 100 },
  ];

function demo(){
    let sum = 0;

    for( item of cartItems){
       sum =  sum + item.price
    }
    return sum;
}

console.log(demo());