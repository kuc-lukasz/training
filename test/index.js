// function x (){
//     return 4
// }
// function y () {
//     return 3
// }
// function z () {
//     return 2
// }

// const operation = (x) => (y) => (z) => x + y * z;

function operation (x,y,z){
    return x + y * z 
}

console.log(operation(4,2,5))