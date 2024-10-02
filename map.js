// const arrayGroup = ["amm", "jam", "kola", "lichi"];

// const item = arrayGroup.map(fruit => fruit + " " + "my fav fruit in the world");

// console.log(item);

// const countNum = [10, 20, 30, 40, 50, 60]

// const select = countNum.map(n => n /2)
// console.log(select);

const myFavFood = ["chumin", "burger", "fresh_frey", "cheken"];

const delicious = myFavFood.map(food => food[2])

// console.log(delicious);


const array =["Apple", "Banana", "Mango", "grape"];

//  we also don't use forEach Es6 mathod 
//  we also use map function


const catchItem = array.map((delicious, index, array) =>{
    // const cheacking = "this item" + delicious + "index value" + index + "full array" + array;
    const cheacking = `item ${delicious} index number ${index} array full element ${array}`
    // console.log(cheacking);


 
})









const elementsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const newArray = elementsArray.map((num) => {
    const add = num * 10;
    return add
})

console.log(newArray);