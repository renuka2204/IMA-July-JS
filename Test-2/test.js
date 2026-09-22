// //1. Write a function to find the second largest number from an array.

let number = [12, 45, 7, 89, 34, 67, 89];
let largest = 0;
let second = 0;
for (let i = 0; i < number.length; i++) {

    if (number[i] > largest) {
        second = largest;
        largest = number[i];
    }
    else if (number[i] > second && number[i] != largest) {
        second = number[i];
    }
}
console.log("Second Largest:", second);

// //2. Write a function removeDuplicates() that returns an array without duplicate values.

const numberss = [10, 20, 10, 30, 20, 40, 30, 50];
function removeDuplicates(start){
    return [...new Set(start)];
}
console.log(removeDuplicates(numberss));

// //3. Write a function that counts how many times each character appears in a string.

const text = "javascript";
function countchar(string) {
    let count = {};
    for (let char of string){
        if (count[char]) {
            count[char]++;
        }else{
            count[char] = 1;
        }
    }
    return count;
}
console.log(countchar(text));

// //4. Find Even Numbers and Calculate Their Sum

let numbers =[12, 5, 8, 21, 44, 7, 10, 3];
let even =[];
let sum = 0;

for (let i=0; i < numbers.length; i++){
    if (numbers[i] % 2 == 0){
        even.push(numbers[i]);
        sum += numbers[i];
    }
}
console.log("Even Number: ",even)
console.log("Sum: ",sum)

// //5. Create a new array containing only the names of students who scored 50 or more.

const students = [
{ name: "Amit", marks: 45 },
{ name: "Riya", marks: 78 },
{ name: "Kunal", marks: 32 },
{ name: "Sneha", marks: 91 },
{ name: "Rahul", marks: 55 }
];

let pass = [];
for(let i=0; i < students.length; i++){
    if (students[i].marks >= 50){
        pass.push(students[i].name);
    }
}
console.log(pass);

// //6. Write a function that finds and returns the product with the highest price.

const products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 }
];

let expensive = products[0];
for (let i=0; i < products.length; i++){
    if (products[i].price > expensive.price){
        expensive = products[i];
    }
}
console.log(expensive);

// //7. Write a function isPalindrome() that checks whether a string reads the same forward and backward.

function isPalindrome(strings){
    let revers = "";
    for (let i = strings.length -1; i >= 0; i--){
        revers += strings[i];
    }
    if (strings == revers){
        return true;
    }else{
        return false;
    }
}
console.log(isPalindrome("hello"));
console.log(isPalindrome("madam"));