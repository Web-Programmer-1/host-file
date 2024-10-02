let allSubjectMark = [12, 23, 45,64, 23, 21, 32,];


let myPersonalInfo = {
    name: "hakim",
    address: "gaibandha",
    phone_user : "samsung 23 pro ultra"
}



function collectingValues(){

    const sentence = `My array and object storage  value are: ${allSubjectMark[1]} this is a sample 
     item my personal biodate collecting information are ${myPersonalInfo.phone_user}`

    return sentence

}

const result = collectingValues();
console.log(result);