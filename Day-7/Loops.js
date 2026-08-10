// // 1. Student Result
// // Create an array of student objects (name, marks). Print each student’s name and whether they Pass or Fail (Pass marks = 35).
let students = [
    { name: "Rahul", marks: 30 },
    { name: "Priya", marks: 45 },
    { name: "Amit", marks: 50 },
    { name: "Sneha", marks: 25 },
];
for (let i= 0; i < students.length; i++){
    if (students[i].marks >= 35){
        console.log(students[i].name + " pass");
    } else {
        console.log(students[i].name + " fail");
    }
}

// //2. Expensive Products
// // Create an array of product objects (name, price). Print only the products whose price is greater than ₹1000.
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Iphone", price: 80000 },
    { name: "Headphones", price: 1000 },
    { name: "Tablet", price: 900},
];
let i = 0;
while (i < products.length) {
    if (products[i].price > 1000) {
        console.log(products[i].name + " -rs" + products[i].price);
    }
    i++;
}

// // 3. Even and Odd Count
// // Create an array of numbers. Count and print the number of even and odd numbers in the array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let even = 0;
let odd = 0;
for (let i = 0; i< numbers.length; i++){
    if (numbers[i] % 2 == 0){
        even++;
    } else{
        odd++;
    }

}
console.log("Even number: "+ even);
console.log("odd number: "+ odd);

// //4. Employee Bonus* If salary is greater than 50000, print "Bonus Eligible".* Otherwise, print "Not Eligible".
let emlpoyee =[
    {name: "Renuka", salary: 40000},
    {name: "Abhishek", salary: 50000},
    {name: "Rohit", salary: 60000},
]
for (let i= 0; i < emlpoyee.length; i++){
    if(emlpoyee[i].salary > 50000){
        console.log(emlpoyee[i].name + " Bonus Eligible")
    } else{
        console.log(emlpoyee[i].name + " Not Eligible")
    }
}

// //5. Largest Even Number
// // Store numbers in an array and find the largest even number using a loop.
let numbers = [20, 15, 32, 60, 12, 5, 8, 50, 44, 16, 22];
let largeEven = 0;
i = 0;
while (i < numbers.length) {
    if (numbers[i] % 2 == 0 && numbers[i] > largeEven) {
        largeEven = numbers[i];
    }
    i++;
}
console.log("lager evan: " + largeEven)

// // 6. Car Details Print only the cars:* whose price is less than ₹10,00,000 * and fuel type is "Petrol".
let cars = [
    { brand: "BMW", Price: 1200000, fueltype: "Petrol" },
    { brand: "Tata", Price: 800000, fueltype: "Petrol" },
    { brand: "Marati", Price: 900000, fueltype: "Petrol" },
    { brand: "Toyato", Price: 1100000, fueltype: "Petrol" },
];
for(let i=0; i<cars.length; i++){
    let car = cars[i];
    if (car.Price < 1000000 && car.fueltype === "Petrol"){
        console.log(car.brand);
    }
}

// // 7. Shopping Cart
// // Create an array of products (name, price, quantity).* Calculate the total bill.
let cart =[
   { name : "Jeans", price: 1000, quantity: 2},
   { name : "Kurti", price: 800, quantity: 1},
   { name : "Top", price: 1500, quantity: 2},
   { name : "Bag", price: 200, quantity: 2},
];
let total = 0;
let i = 0;
while(i < cart.length){
    total = total + (cart[i].price * cart[i].quantity);
    i++;
}

if (total > 5000){
    console.log("Discount Applied")
}else{
    console.log("No Discount")
}
console.log("Total: " + total);

// //8. Voting Eligibility
let person = [
    { name :"Rohit", age :18 },
    { name :"Renuka", age :20},
    { name :"Abhishek", age :22 },
    { name :"Sayali", age :15},
];
for ( i=0; i<person.length; i++){
    if(person[i].age >= 18){
        console.log(person[i].name + " Eligible to Vote")
    } else{
        console.log(person[i].name + " Not Eligible")
    }
}

// //9. Highest Marks
// // Create an array of student objects (name, marks).
// // Find the student who has the highest marks and print their name and marks.
let Marks = [
    {name: "Rohit", marks: 80},
    {name: "Rahul", marks: 50},
    {name: "Rakesh", marks: 90},
    {name: "Rohan", marks: 99},
];
let highest = Marks[0];
for(i = 0;i< Marks.length;i++){
    if(Marks[i].marks > highest.marks){
        highest = Marks[i];
    }
}
console.log("highest Marks: " + highest.name + " - " + highest.marks)

//10. Bank Accounts
// * If balance is less than 1000, print "Low Balance" along with the account holder’s name.
// * Otherwise, print "Balance OK"
let Account =[
    {name: "sayali", balance: 500},
    {name: "renuka", balance: 1000},
    {name: "anushka", balance: 800},
    {name: "sneha", balance: 1200},
];
for(i=0; i<Account.length; i++){
    if(Account[i].balance < 1000){
        console.log(Account[i].name + " Low Balance")
    }else{
        console.log(Account[i].name + " Balance OK")
    }
}