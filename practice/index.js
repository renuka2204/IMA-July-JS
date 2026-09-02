// //Student Grade System

let marks = 85;

if (marks >= 90 && marks <= 100) {
    console.log("A+");
} else if (marks >= 75) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else if (marks >= 40) {
    console.log("C");
} else {
    console.log("Fail");
}

// Login & Access System

let username = "admin";
let password = "1234";
let isAccountActive = true;
let isAdmin = true;

if (username == "admin" && password == "1234" && isAccountActive == true) {
    console.log("Login successful");
    console.log("Access granted");

    if (isAdmin == true) {
        console.log("Admin Dashboard");
    }
} else {
    console.log("Login failed");
    console.log("Access denied");
}