// class Person {
//     constructor(name, age) {
//       this.name = name; // প্রোপার্টি সেট করা
//       this.age = age;
//     }
  
//     greet() { // মেথড তৈরি করা
//       console.log('Hello, my name is ' + this.name);
//     }
//   }
  
//   // ক্লাস থেকে অবজেক্ট তৈরি
//   const person1 = new Person('John', 30);
//   const person2 = new Person('Jane', 25);
  
//   person1.greet(); // আউটপুট: Hello, my name is John
//   person2.greet(); // আউটপুট: Hello, my name is Jane



// class Person {
//     constructor(name) {
//       this.name = name; // শুধুমাত্র name প্রোপার্টি সেট করা হচ্ছে
//     }
  
//     greet() { // greet নামের একটি মেথড
//       console.log('Hello, my name is ' + this.name);
//     }
//   }
  
//   // ক্লাস থেকে অবজেক্ট তৈরি
//   const person1 = new Person('John');
//   const person2 = new Person('Jane');
  
//   person1.greet(); // আউটপ


//   class Person {
//     constructor(name){
//         this.name = name;
//     }

//     greet(){
//         console.log(`my sir name is : ${this.name}`)
//     }
//   }

//   const man1 = new Person("rashid");

//   man1.greet();


class manInfo {
    constructor(address){
        this.address = address;
    }
    bioFun(){
        
        const herDetails = `my client permanetly address are : ${this.address}`;
        console.log(herDetails);
    }
}

const client = new manInfo(`America Los Angels`);
const client2 = new manInfo(`Paris`);
const client3 = new manInfo(`Canada`);

client.bioFun();
client2.bioFun();
client3.bioFun();
