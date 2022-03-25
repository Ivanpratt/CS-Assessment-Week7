

function addtoZero(array1) {
let iterations = array1.length * array1.length
for(let i = 0;i < iterations; i++) {
 for(let p = 0; p <= array1.length; p++){

    if (p === i){
    }else if(array1[i] + array1[p] === 0){
        return "Two of the numbers added together = 0"
    }

 }
 
};
return "None of the numbers added together = 0"

}

console.log(addtoZero([0, -2, 7, -7, -4, 4]))