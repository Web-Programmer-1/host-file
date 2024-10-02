const filterList = [1,2,3,4,5,6,7,8,9]

const find = filterList.find(n => n === 9);
// console.log(find);

const numbers = [23,45,23,74,84,34,753,74];

const founding = numbers.find( (num) =>{

    const counter =  num > 80 && num%2 === 0;
    return counter

})

console.log(founding);

