// // 1. Student Result
// // Create a student object with: Prints “Pass” if marks are 35 or above Otherwise prints “Fail”
const student = {
    Name: "Rohit",
    Marks: 55,
    checkResult: function () {
        if (this.Marks >= 35) {
            console.log("Pass");
        } else {
            console.log("Fail");
        }
    }
}
console.log(student.checkResult());

// // 2. Mobile Discount
let mobile = {
    Brand: "Samsung",
    price: 35000,
    checkDiscount: function () {
        if (this.price > 30000) {
            console.log("10% Discount Available");
        } else {
            console.log("No Discount")
        }
    }
}
console.log(mobile.checkDiscount());

//3. Bank Account
let bankAccount = {
    accountHolder: "Renuka",
    balance: 5000,
    withdraw: function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawal successful. balance: rs${this.balance}`);
        } else {
            console.log("Insufficient balance");
        }
    }
}
console.log(bankAccount.withdraw(4000)); 

// //4. Employee Bonus
let employee = {
    name: "Abhishek",
    salary: 50000,
    checkBonus: function () {
        if (this.salary >= 50000) {
            console.log("Bonus Eligible");
        } else {
            console.log("Not Eligible for Bonus");
        }
    }
}
console.log(employee.checkBonus());

// // // 5. Shopping Cart
let shoppingCart = {
    itemsName: ["Shirt"],
    Price: [1000],
    checkFreeDelivery: function () {
        // let totalPrice = this.Price.reduce((acc, curr) => acc + curr, 0);
        if (this.Price >= 1000) {
            console.log("Free Delivery");
        } else {
            console.log("Delivery Charges Apply");
        }
    }
}
console.log(shoppingCart.checkFreeDelivery());

//6. Movie Ticket
const movieTicket = {
    name: "Renuka",
    age: 20,
    checkTicket: function () {
        if (this.age >= 18) {
            console.log("Allowed to Watch Movie");
        } else {
            console.log("Not Allowed");
        }
    }
}
console.log(movieTicket.checkTicket());

// //7. Laptop Warranty
let laptop = {
    brand: "HP",
    WarrantyYears: 2,
    checkWarranty: function () {
        if (this.WarrantyYears >= 2) {  
            console.log("Extended Warranty Available");
        } else {
            console.log("Standard Warranty");
        }   
}
}
console.log(laptop.checkWarranty());

// //8. Product Stock
const product = {
    name: "Iphone",
    stock: 5,
    checkStock: function () {
        if (this.stock > 0) {
            console.log("In Stock");
        } else {    
        console.log("Out of Stock");
        }   
}
}
console.log(product.checkStock());

//9. User Login
let user = {
    username: "Renuka",
    password: "renuka123",
    login: function(inputPassword) {
        if (this.password === inputPassword) {
            console.log("Login Successful");
        } else {
            console.log("Invalid Password");
        }
    }
}
console.log(user.login("renuka12"));

//10. Basic Array Check (No Loops)
// Create an array of 3 fruits.
let fruits = ["Apple", "Banana", "Mango"];
let checkFruit = function (fruitName) {
    if (fruitName === fruits[0] || fruitName === fruits[1] || fruitName === fruits[2]) {    //   (||: logical OR operator)
        console.log("Fruit Found");
    } else {
        console.log("Fruit Not Found");
    }
}
checkFruit("Apple");
checkFruit("Orange"); 