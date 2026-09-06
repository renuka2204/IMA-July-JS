//1.  Print every number.
const numbers = [10, 20, 30, 40, 50];
numbers.forEach(number => {
    console.log(number);
});

//2. Create a new array with numbers multiplied by 2. 
const numbers = [10, 20, 30, 40, 50];
const multiNumbers = numbers.map((number) => {
    return number * 2;
});
console.log(multiNumbers);

//3. Filter numbers greater than 25.
const numbers = [10, 20, 30, 40, 50];
const filterNumbers = numbers.filter((number) => {
    return number > 25;
});
console.log(filterNumbers);

//4. Find the first number greater than 25.
const numbers = [10, 20, 30, 40, 50];
const firstNumber = numbers.find((number) => {
    return number > 25;
});
console.log(firstNumber);

// //5. Check whether 30 exists. 
const numbers = [10, 20, 30, 40, 50];
const exists = numbers.some((number) => {
    return number === 30;
});
console.log(exists);

//--------------------------------------------------------------

//Array of products
const products = [
    { name: "Laptop", price: 10000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 6000 },
    { name: "Monitor", price: 5000 },
];

//1. Print all product.
products.forEach((product) => {
    console.log(product.name, "$" + product.price);
});

//2. Create a new array with product names.
const productNames = products.map((product) => {
    return product.name;
});
console.log(productNames);

//3. Find products above ₹5000. 
const expensiveProducts = products.filter((product) => {
    return product.price > 5000;
});
console.log(expensiveProducts);

//4. Find the first product below ₹1000. 
const lowProduct = products.find((product) => {
    return product.price < 1000;
});
console.log(lowProduct);