

const student = {
    name: "hakim",
    age: 18,
    department: "computer science",

    address:{
        street: "gulshan",
        city: "dhaka",
        country: "bangladesh",
    }
};

// Accessing nested properties


// const {address:{country}} = student;
// console.log(country
// );

// for(let x in student.address){
//     console.log(student.address[x]);

// }

// student.address.map(student.address) => {

//     console.log(address);
 
// };

Object.values(student.address).map(value =>{
    console.log(value);
})