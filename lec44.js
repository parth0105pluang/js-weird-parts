//IIFE(Immediately Invoked Function Expression)
var greeting = function(name){
    return("Hello"+name);
}('parth');
console.log(greeting);
//here greeting is not a function but a string.
//making function expression include()
(function(name){
var greeting = "Hello";
console.log(greeting+" "+name)
});
