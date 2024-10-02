

const addFunc = (person) => person.brand.celebrity;
const studentObject = {
    name: "hakim", age: 18,
    brand:{

        phone : "iphone", 
        car : "tesla",
        shoes : "theree star",
        celebrity :"tiktoker brand"

    },};

const result = addFunc(studentObject);
// console.log(result);



const arrayParameter = (arrayElement) => arrayElement;

const collectArray = arrayParameter([111,222,333,444,555,666,777])

collectArray.pop(111, 111, 111, 111);

// console.log(collectArray);

// const arrayParameter = (arrayElement) => arrayElement;  // পুরো অ্যারে রিটার্ন করছি

// const collectArray = arrayParameter([111, 222, 333, 444, 555, 666, 777]);  // অ্যারে পাস করছি

// collectArray.push(111, 111, 111, 111);  // নতুন মান push করছি

// console.log(collectArray);  // পুরো অ্যারে প্রিন্ট করছি

const math = () => (Math.PI * 2 );
console.log(math());
