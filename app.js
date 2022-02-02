//scope chain
function b(){
    console.log(myVar);
}
function a(){
    var myVar = 2;
    function c(){
        console.log(myVar);
    }
    b();
    c();
}
var myVar = 1;
a();
/*
app.js:2 1
app.js:7 2
*/
// outer ref of b is global not a lexically.