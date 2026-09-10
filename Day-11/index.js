//array of objects

const users = [
    { name: "Rahul", age: 22 },
    { name: "Amit", age: 28 },
    { name: "Priya", age: 24 }
];
//Print every name. 
users.forEach(user => console.log(user.name));

//Get all names using map().
const names1 = users.map((user) => {
    return user.name;
});
console.log(names1);

// Find users above 25.
const above = users.find((user) => {
    return user.age > 25;
}); 
console.log(above);

//Find "Priya". 
const priya = users.find((user) => {
    return user.name === "Priya";
});
console.log(priya);

//---------------------------------------------------------------

const products = [
    { name: "laptop", price: 10000, category: "Electronics" },
    { name: "book", price: 50, category: "Education" },
    { name: "pen", price: 20, category: "Education" },
    { name: "phone", price: 5000, category: "Electronics" },
    { name: "table", price: 6000, category: "Furniture" }
];
// Print all products.
products.forEach(product => {
    console.log(product);
});

//Get all product names.
const names = products.map((product) => {
    return product.name;
});
console.log(names);

// Filter products above ₹5000. 
const expensive = products.filter((product) =>{
    return product.price > 5000;
});
console.log(expensive);

// Find one product by name.
const oneName = products.find((product) =>{
    return product.name === "phone";
});
console.log(oneName); 

//Filter products by category. 
const category = products.filter((product) => {
    return product.category === "Education"
});
console.log(category);
