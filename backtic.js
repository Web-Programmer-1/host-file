
// const student ={
//     name :"hakim",
//     id: 713664,
//     department: "computer science",
//     grade: "A+",
//     marks: [85, 90, 95, 88],
// }

// const output = `amar name ${student.name} my id number ${student.id} my department ${student.department} amar grade ${student.grade} amar fav subject ${student.marks.map((data) => data).join("/")})}`;

// console.log(output);


const students = [
    {
      name: "Rahim Ahmed",
      age: 20,
      id: "ST12345",
      subjects: {
        mathematics: {
          marks: 85,
          teacher: "Mr. Hasan"
        },
        physics: {
          marks: 90,
          teacher: "Ms. Shirin"
        },
        chemistry: {
          marks: 78,
          teacher: "Mr. Karim"
        }
      },
      contact: {
        phone: "01712345678",
        email: "rahim@example.com"
      },
      address: {
        city: "Dhaka",
        postalCode: "1205"
      }
    },
    {
      name: "Karim Hossain",
      age: 22,
      id: "ST12346",
      subjects: {
        mathematics: {
          marks: 75,
          teacher: "Mr. Hasan"
        },
        physics: {
          marks: 88,
          teacher: "Ms. Shirin"
        },
        chemistry: {
          marks: 80,
          teacher: "Mr. Karim"
        }
      },
      contact: {
        phone: "01798765432",
        email: "karim@example.com"
      },
      address: {
        city: "Chittagong",
        postalCode: "4000"
      }
    }
  ];
  
const x = students.find( (p) => p.age === 22  );
console.log(x);
  