//Template Literals 

// const user = {
//     name : "Renuka",
//     city : "Pune"
// };

// const { name, city } = user;
// console.log(
//     `welcome ${name} form ${city}`
// );

let Profile = {
    name: "Renuka",
    age: 22,
    city: "Solapur",
    course: "Full Stack"
};

// Use destructuring.

let { name, age, city, course } = Profile;

console.log("name: " + name);
console.log("age: " + age);
console.log("city: " + city);
console.log("course: " + course);

//Use a template literal to create an introduction sentence. 

console.log(`Hello I am ${name}. I'm ${age} years old.I am from ${city}.
currently, I am pursuing ${course}.`);

//Create a second skills array. 

let skills1 = [ "HTML", "CSS", " JavaScript"];
let skills2 = [ "React", "Node.js", "MongoDB"];

let allSkills = [...skills1, ...skills2];
console.log("Skills:", allSkills)

//Create a function using rest parameters. 

function showSkills(...skills){
    console.log(skills);
};
showSkills("HTML", "CSS", "JavaScript");