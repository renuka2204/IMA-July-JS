// varibles types

// let
// const 
// var 



// let userAge = 25;
// let userName = "Renuka"
// let isAssignmentCompleted = true;


// Data types 
// Number -> 234, 34.32
// String -> "" '' ``
// Boolean -> only true false




let userName = "Renuka";
console.log("Hi")
console.log(24)
console.log(true)
console.log(userName)
console.log(2 + 2)



let userAge = 25;
console.log(userAge, "- user age", 24, true, false, "Hii", 'welcome')




//                 var         let         const

// re-assign       yes         yes           no
// re-declare      yes         no            no
// scope          function    block        block
 



var age = 24; // declare and assign 
console.log(age, "- age with declare and assign")
age = 25 //; re-assign 
console.log(age, "- age with re-assign")
var age = 26;
console.log(age, "- age with re-declared")




let age = 25;
console.log(age, "- age with declare and assign")
age = 26;
console.log(age, "- age with re-assignF")
let age = 27;
console.log(age, "- age with re-declare")





const age = 25;
console.log(age, "- age with declare and assign")
age = 26;
console.log(age, "- age with re-assignF")
const age = 27;
console.log(age, "- age with re-declare")





// Global scope  

// Scope - space in file 
// block - {}

// {

// }




var age = 25;
console.log(age)
{
    console.log(age)
}



{
    var age = 25;
    console.log(age)
}
console.log(age)




{
    let age = 25;
    {
        console.log(age, "- inner log")
    }
}
console.log(age, "- outer log")



{
    {
        {
            const age = 25;
        }
        console.log(age)
    }
}




var number1 = 1;
{
    let number2 = 2;
    {
        let number3 = 3.1;
        {
            const number3 = 3;
        }
        console.log(number3) // 3.1
    }
    console.log(number2) // error 2
}
console.log(number1) // 1