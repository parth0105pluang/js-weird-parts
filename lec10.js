//b is called and a was shown undefined -> hoisting.
b();
console.log(a);
var  a = "Hello World";
function b(){
console.log("Called b");
}
