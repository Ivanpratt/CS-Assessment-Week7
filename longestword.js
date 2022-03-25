function longest(wordarray){
    let longestword = 0
    for (const word of wordarray){
        if (word.length > longestword){
            longestword = word.length
        }
    }

    return longestword
}

console.log(longest(["hi", "helasdasdlo", "hello"]))