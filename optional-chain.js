

const optionalChain = {
    name: "hakim",
    id: 713664,
    opccupation : {
        frist : 10000,
        second : 20000,
    },
    salary : "gorib",
    isBike : false,
};

// const cheacking = optionalChain.opccupation?.salary.isBike;
// console.log(cheacking);
const cheacking = optionalChain.opccupation?.second;
console.log(cheacking);

const optionalChain2 = {
    name: "hakim",
    id: 713664,
    opccupation : {
        frist : 10000,
        second : 20000,
    },
    salary : "gorib",
    isBike : false,
};

const cheacking2 = optionalChain2.opccupation.second;
console.log(cheacking2);


const petOweber ={
    name: "John Doe",
    balance: 1000,
    transactions: [
        { type: "Deposit", amount: 500 },
        { type: "Withdrawal", amount: 200 },
        { type: "Deposit", amount: 300 },
    ],

  type:{
    color: "black",
    price: 2000,
    weight : "5kg",
    export : "america",
    behaviour: "that's cool",
  },

  car:{
    brand: "Tesla",
    model: "Model S",
    year: 2021,
    color: "blue",
    price: 80000,
    mileage: 150000,
    owner: "John Doe",
    insurance: {
      coverage: 20000,
      renewalDate: "2023-01-01",
    },
    services: {
      insurance: true,
      maintenance: true,
      repairs: true,
    },
    fuel: {
      type: "electric",
      capacity: 120,
      range: 300,
    },
    hasGPS: true,
    hasSunroof: true,
    hasAirbag: true,
    hasRearviewMirror: true,
    hasBluetooth: true,
    hasCruiseControl: true,
    hasHeatedSeats: true,
    hasNavigation: false,
  },
};

// console.log(petOweber.car.services);
console.log(petOweber?.type?.america?.webdetails);