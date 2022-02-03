//anonyGreet();//no hoisting is like undefined()
var anonyGreet = function(){
    console.log("hi");
}
anonyGreet();
function log(a){
    console.log(a);
}
log(function(){
console.log('hi');
});
/*
app.js:3 hi
app.js:7 ƒ (){
console.log('hi');
}
*/