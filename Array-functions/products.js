const x = [
{
name: "Product1",
price: 299,
},
{
name: "Product2", 
price: 199,
},
{
name: "Product3",
price: 499,
},
];

const newX = x
.filter(item => item.price < 400)
.map(item => `${item.name} - ${item.price}`)
.join("\n")

console.log(newX)