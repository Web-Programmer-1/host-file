

const filterList = [1,2,3,4,5,6,7,8,9]

const item = filterList.filter(num => num > 8 )
// console.log(item);


const friendGroup = ["tim", "tom", "shohan", "gagindra", "borkotALi", "hakim", "kolimuddin",
    "solimoddin"
]

const cheacking = friendGroup.filter(fd => fd.length < 4);

// console.log(cheacking);




const filterArray = [1,4,67,89,46,23,12,90,67,89,46,23,12,90,67,89];


const filterCheacking = filterArray.filter((fil) => {
    const demo =   fil > 7 && fil%2 === 0
    return demo;
})

console.log(filterCheacking);

