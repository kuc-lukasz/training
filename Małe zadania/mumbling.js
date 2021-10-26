function mumbling (word) {
    return [...word].map((e,i) => {
        firstLetter = e.toUpperCase()
        indexNumb = e.repeat(i)

        return firstLetter + indexNumb
    }).join("-")
}

const newnew = mumbling("slowo")

console.log(newnew)