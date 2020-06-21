// IIFE
(function(){
    console.log("hi IIFE");
})();

//closure in IIFE

let app =(function (){
    let Id = 12;
    let getId = function(){
        return Id;
    };
    return {
        getId: getId
    }
})();
console.log(app.getId());

// this keyword

let x ={
    Id : 12,
    getId: function()
    {
        return this;
    }
};
console.log(x.getId()); // return object of x as the this keyword represents the object which contain the function

// call and apply

let callExample ={
    Id : 12,
    getId: function(name)
    {
        return name + this.Id;
    }
};
let NewcallExample={
    Id : 34
}
console.log(callExample.getId.call(NewcallExample,'Id: ')); // 34 as the new object passes be the this which called by the function

// apply take the arguments as an array

let applyExample ={
    Id : 12,
    getId: function(name)
    {
        return name + this.Id;
    }
};
let NewapplyExample={
    Id : 34
}
console.log(applyExample.getId.apply(NewapplyExample,['Id: '])); // 34 as the new object passes be the this which called by the function

// bind
let bindExample ={
    Id : 12,
    getId: function()
    {
        return this.Id;
    }
};
let NewbindExample={
    Id : 34
}
console.log(bindExample.getId.bind(NewbindExample)()); // 34 as the new object passes be the this which called by the function

//Default parameter

let trackCar = function(carId , city ='Cairo')
{
    console.log(`car ${carId} in ${city}`);
}
trackCar(123); // car 123 in Cairo
trackCar(123,'Alex'); // car 123 in Alex

let trackCar2 = function(city ='Cairo',carId)
{
    console.log(`car ${carId} in ${city}`);
}
trackCar2(123); // car undefined in 123 as the first argument go to the first parameter
// evenif it is a default one so the default parameter must be at the end of parameters

trackCar2('Alex',123); // car 123 in Alex
