// Global Scope

let productId = 123;
function showProductIdGlobal()
{
    console.log(productId); //123
}

showProductIdGlobal();

// Function Scope
function showProductIdFunction(ProductName)
{
    let ProductIdInside = 123;
    let productId = 456;
    console.log(ProductName); //product1
    function fix()
    {
        let productId = 789;
        console.log(productId); //789
    }
    fix();
    console.log(productId); //456
}
//console.log(ProductIdInside); // Error not defined because it is defined inside the function
//console.log(ProductName); // Error not defined because it is a parameter inside the function

showProductIdFunction('product1');

// Block Scope
if(true)
{
    let message = 'Hello Block Scope';
    var message2 = 'Hello Block Scope using var';
    console.log(message);
}
//console.log(message); //Error not defined because message declared inside the if block
console.log(message2); // no error because var is hoisted in the global at the begining


// Var and hoisting

IdUsingVar = 123;
console.log(IdUsingVar); //123 because var variables hoisted at the begining
var IdUsingVar= 456;

/*IdUsingLet = 123;  //Error not defined because let and const variables can't intialize before declaration "they aren't hoisted"
console.log(IdUsingLet);
let IdUsingLet = 456;*/

// functions are hoisted at the begining
HoistedFunction();
function HoistedFunction()
{
    console.log("Hello Function");
}



