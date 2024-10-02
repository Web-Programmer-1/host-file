

const numbers= [1, 3, 5, 6, 6,];

numbers[1] = 100;

numbers.pop(111, 222, 333, 444);

// console.log(numbers);

const myInfo = {
    name :"hakim",
    roll: 713664,
    department: "cse"
}

myInfo.department = "CST";
// console.log(myInfo);

let sum = 0;

for(let i = 0; i < 0; i++){

    const sum = sum + 10;
    // console.log([i].sum);

}


function greet(name = "good morning"){

    return `hellow ${name} !`
}

console.log(greet("hakim"));