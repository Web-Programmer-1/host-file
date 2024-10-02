
const customerData = {
    brand : "samsung",
    price : 165000,
    protection : "waterproof",
    camera_zoom : 100,
    display_size : 6,

    car:[
        {
            company : "tesla",
            price : 1000000,
            color: "black",
            market_position  : 1,
            car_model : "BMW",
        },
        {
            company1 : "tesla",
            price1 : 1000000,
            color1: "black",
            market_position1  : 1,
            car_model1 : "BMW"
        },
    ],
};


const dataFetch = customerData.car[1];

console.log(dataFetch)









// // const object = Object.keys(customerData);
// // console.log(object);

// const collection = Object.values(customerData
// );
// console.log(collection);