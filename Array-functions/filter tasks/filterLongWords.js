const sentence = "The quick brown fox jumps over the lazy dog"

1 sposób 
function filterLongWords (anysentence) { 
    return anysentence.split(' ').filter(e => {
        if (e.length > 3){
            return e
        }
    })

}


// 2 sposób 
function filterLongWords (anysentence, length) { 
    return anysentence.split(' ').filter(e => e.length > length)

}

console.log(filterLongWords(sentence))