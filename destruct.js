

const arrayItem = ["hakim", "rokib", "shariar", "mehedy"
];


const [,,,x]= arrayItem;

// console.log(x);


const student ={
    name: "hakim",
    id: 713664,
    department : "cse",
    age : 23,
    gender: "male",
    ocuppation: "Frontend web Devloper",
};


const {name: namme, age, department} = student;
console.log(name, age, department);

