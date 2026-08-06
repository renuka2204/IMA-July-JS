//1. Create an Employee Object. Add a showEmployeeDetails() method that displays all the employee information using this.
const employee = {
    name: "Renuka Shinge",
    id: 101,
    department: "IT",
    salary: 50000,
    experience: 2,
    showEmployeeDetails: function() {
        console.log("Employee Name: " + this.name);
        console.log("Employee ID: " + this.id);
        console.log("Employee Department: " + this.department);
        console.log("Employee Salary: " + this.salary);
        console.log("Employee Experience: " + this.experience);
    }
}
console.log(employee.showEmployeeDetails());

//2. Create a Bike Object
const bike = {
    brand: "Suzuki",
    model: "Gixxer",
    color: "White",
    start: function() {
        console.log(this.brand + " bike started");  
    },
    stop: function() {
        console.log(this.brand + " bike stopped");  
    }
}
console.log(bike.start());
console.log(bike.stop());

//3. Create a Wallet Object. Update the balance using this and display the remaining balance after each operation.
const Wallet = {
    ownerName: "Renuka",
    balance: 10000,
    addmoney:function(amount){
        this.balance += amount;
        console.log("Addmoney: " + amount);
        console.log("Remaining Balance: " + this.balance);
    },
    spendmoney:function(amount){
        if(amount <= this.balance){       
        this.balance -= amount;
        console.log("spendmoney: " + amount);
        console.log("Remaining Balance: " + this.balance);
    }
    else{
        console.log("Insufficient Balance");
    }
}
}
console.log(Wallet.addmoney(2000));
console.log(Wallet.spendmoney(3000));
console.log(Wallet.spendmoney(15000));

//4. Create a Library Object Display all books and the total price of all books.
const library = {
    books: [],
    addBook: function (title, price) {
        this.books.push({
            title: title,
            price: price
        });
    },
    showBooks: function () {
        console.log("Books in the library:");
        for(let book of this.books) {
            console.log(book.title + " - $" + book.price);
        }
    },
    calculateTotalPrice: function () {
        let total = 0;
        for(let book of this.books) {
            total += book.price;
        }
        console.log("Total Price: $" + total);
    }
}
console.log(library.addBook("Book 1", 10));
console.log(library.addBook("Book 2", 15));
console.log(library.addBook("Book 3", 20));
console.log(library.showBooks());
console.log(library.calculateTotalPrice());

//5. Create a Laptop Object. Add a displayInfo() method that prints all the laptop details using the this keyword.
const laptop = {
    brand: "HP",
    processor: "Intel Core i5",
    RAM: "8GB",
    price: 60000,
    displayInfo: function() {
        console.log("Brand: " + this.brand);
        console.log("Processor: " + this.processor);
        console.log("RAM: " + this.RAM);
        console.log("Price: " + this.price);
    }
}
laptop.displayInfo();
