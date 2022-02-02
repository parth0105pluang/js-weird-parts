//Execution phase line by line
function b(){
    console.log("Called b");
    }
b();
console.log(a);
var  a = "Hello World";
console.log(a);
/*
app.js:5 Called b
app.js:5 undefined
app.js:7 Hello World
*/
