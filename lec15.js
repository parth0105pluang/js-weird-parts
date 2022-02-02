function b(){
    var myVar;
    console.log(myVar);
}
function a(){
    var myVar = 2;
    console.log(myVar);
    b();
    console.log(myVar);
}
var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
/*
app.js:12 1
app.js:7 2
app.js:3 undefined
app.js:9 2
app.js:14 1
*/