//1. object: object is a collection of key-value pairs. It is used to store multiple values in a single variable. 
//Create a Student Object with 5 properties and a showDetails() method.
const student = {
    name: "Renuka",
    age: 21,
    course: "Full Stack Development",
    rollno: 60,
    city: "Solapur",
    showDetails() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.course);
        console.log(this.rollno);
        console.log(this.city);
    }
}
console.log(student.showDetails());

//2. Create a Car Object with start() and stop() methods using this.
const car ={
    brand: "BMW",
    start () {
        console.log(this.brand +" start");
    },
    stop() {
        console.log(this.brand +" stop");
    },
}
car.start();
car.stop();

//3. Create a Bank Account Object with deposit() and withdraw() methods.
const bankAccount = {
    Balance: 1000,
    deposite(amount) {
        this.Balance += amount;
        console.log(this.Balance)
    },
    withdraw(amount) {
        this.Balance -= amount;
        console.log(this.Balance);
    }
}
bankAccount.deposite(500);
bankAccount.withdraw(200);

//4. Create a Shopping Cart Object that stores items and calculates the total price.
const shopping = {
    item1: "Shirt",
    item2: "Pant",
    item3: "Shoes",
    price1: 800,
    price2: 999,
    price3: 1200,
    Total() {
        console.log(this.price1 + this.price2 + this.price3);
    }
}
shopping.Total();

//5. Create a Mobile Object with brand, price, color, and a displayInfo() method using this.
const mobile ={
    brand: "iphone",
    price: 150000,
    color: "white",
    displayInfo() {
        console.log("Brand: " + this.brand);
        console.log("Price: " + this.price);
        console.log("Color: " + this.color);
    }
}
mobile.displayInfo();