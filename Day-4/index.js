// Array - Array is special variable which is used to store multiple values inside a single variable;
let students = ["Rohit", "Abhishek", "kaveri", "Renuka"];
console.log(students);

let students = ["Rahul", "Abhishek", "kaveri", "Renuka"]; //Array of length its always starts from zero
console.log(students);

//  Push = push method adds one or more elements at END of an array;
// array.push(value);
let fruits = ["Apple", "Banana", "Mango"]
fruits.push("papaya");
console.log(fruits);

//  pop = pop method removes the last element from an array and returns removed element;
// array.pop()
let number = [1,3,4,57,8];
number.pop();
console.log(number)

// shift = shift removes the first element from an array;
// shift();
let num = [1,2,5,6,7];
num.shift();
console.log(num)

// unshift = unshift used to add first element inside array;
// unshift();
let name = ["a","b","c","d"];
name.unshift("a");
console.log(name);

// map() = map creates a NEW array by applying function to every element of the original array.
// array.map(function(element){
// return something});
let number = [1,2,3,4];
let result = number.map(function(element){
    return element - 1
})
console.log(result);

// filter - creates a NEW array contaning only the elements that satisfy the condition;
let ages = [10,15,18,22,25]
let adults = ages.filter(age => age >= 18);
console.log(adults);

let names = ["Ram","Rohan","Abhishek"];
let r = names.filter(name => name.startsWith("A") )
console.log(r);

// reduce() = reduce reduces all array elements into a single value by repeatedly applying a function;
// array.reduce(function(total,current){
// return total+current;
// },0);
let numbers = [10,20,30];
let total = numbers.reduce((sum,num)=>{
    return sum + num; 
},0);
console.log(total)

let numbers = [10,20,30];
let total = numbers.reduce(function(total,current){
    return total+current;
},0);
console.log(total)