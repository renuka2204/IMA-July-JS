//object

const employee = {
    name : "Renuka",
    age : 22,
    email : "renuka@example.com",
    city : "Pune",
    department : "IT",
    salary : 50000,
}

console.log(employee);
employee.salary = 60000;
employee.experience = 2;
delete employee.email;
console.log(employee);