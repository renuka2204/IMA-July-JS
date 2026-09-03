//Create arrow functions for: 

// square(number)
const square = (num) => num * num;
console.log(square(4));

// cube(number)
const cube = (num) => num * num * num;
console.log(cube(4));

//isEven(number)
const isEven = (num) => num % 2 === 0;
console.log(isEven(20));

//calculateTotal(price, quantity) 
const calculateTotal = (price, quantity) => price * quantity;
console.log(calculateTotal(200, 5));

//2nd way
const calculateTotal2 = ( price, quantity) => {
    return price * quantity;
}
console.log(calculateTotal2(200, 5));



//Shopping Cart Create an array containing 5 products. 

//all products
const products = ["Top", "Bottom", "Shoes", "Accessories", "Bag"];
console.log(products);

//first product
const product = ["Top", "Bottom", "Shoes", "Accessories", "Bag"];
console.log(product[0]);

//add one product
const product1 = ["Top", "Bottom", "Shoes", "Accessories", "Bag"];
product1.push("Dress");
console.log(product1);

//remove one product
const product2 = ["Top", "Bottom", "Shoes", "Accessories", "Bag"];
product2.pop();
console.log(product2);

//length of the array
const product3 = ["Top", "Bottom", "Shoes", "Accessories", "Bag"];
console.log(product3.length);