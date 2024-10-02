
// function worker(){
//     let counter = 0;
//     return function(){
//         counter++
//         return counter
//     }
// };

// const demo = worker();

// console.log(demo());

function  sentence(){
    let word = "i love allah and hazrat-muhammad (s)"

    function subFunction(){
        console.log(word.toLowerCase())
    }
    return subFunction
}

const sentenceFunction = sentence()

sentenceFunction()