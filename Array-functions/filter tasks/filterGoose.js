// Stwórz tablicę która nie będzie zawierała tych konkretnych gęs z drugiej tabeli 

const allBirds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]


function gooseFilter (birds) {
    // 1 sposób 
    return birds.filter(element => !geese.includes(element));

    // 2 sposób 
    return birds.filter((e)=>{
        return e === !geese.includes(e)
    })

    //3 sposób 
    return birds.filter((e)=> { return !geese.includes(e)})


  };

  console.log(gooseFilter(allBirds))