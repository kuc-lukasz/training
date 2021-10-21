const numbers = [0,1,2,3,4,5,6,7,8,9]


function phoneNumb(arrray) {
    result = "("
    for (i = 0; i < 3; i++) {
         result += arrray[i]
    }
    result += ') '
    for (i = 3; i < 6; i++) {
         result += arrray[i]
    }
    result += '-'
    for (i = 6; i < 10; i++) {
         result += arrray[i]
    }
    
    return result
}

console.log(phoneNumb(numbers))

