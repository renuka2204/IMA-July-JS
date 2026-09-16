// //1.
let a = 10;
let b = "10"
console.log(a + b); // b is a string
console.log(a - b); // convert the string in number.
console.log(a == b); // there check same number
console.log(a === b); // they check equality.

//students marks

//2. 

let marks = 40;

if(marks < 0 || marks > 100) {
    console.log("invalid marks");
} else if (marks >= 90) {
    console.log("A Grade");
}else if (marks >= 75) {
    console.log("B Grade");
}else if (marks >= 50) {
    console.log("C Grade");
}else{
    console.log("fail");
}

// //3. loop + array
let number = [10, 20, 30, 40, 50, 60, 70, 80];
let total =0;
for (let i=0; i < number.length; i++) {
    console.log(number[i]);
    if (number[i] > 40){
        console.log("Greater: ", number[i]);
    }
    total += number[i];
}
console.log(number)
console.log("total: ", total)

// //5. funcation + includes

let fruits = ["apple", "banana", "mango", "orange", "grapes"]
function checkFruit(fruit) {
    if (fruits.includes(fruit)) {
        console.log("fruit is available")
    } else {
        console.log("fruit is not available");
    }
}
checkFruit("mango")
checkFruit("kiwi")

// 4. object and array

let students = [
{ name: "Amit", age: 22, marks: 85 },
{ name: "Priya", age: 21, marks: 45 },
{ name: "Rahul", age: 23, marks: 72 },
{ name: "Sneha", age: 20, marks: 90 }
];

let passStudents = students.filter(student => student.marks >70);
console.log(passStudents);

let names= students.map(student => student.name);
console.log(names);

let studentMark = students.forEach(student => student)
   