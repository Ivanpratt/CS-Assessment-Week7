const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let pangram = function(sentence){
for (const letter of alphabet){
    if (sentence.includes(letter) === false){
         return "This is not a pangram"
    }
}
return "this sentence is a pangram"
}

console.log(pangram("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"))