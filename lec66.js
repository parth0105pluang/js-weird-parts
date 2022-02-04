var a = 3;
console.log(typeof a);
var b = "Hello";
console.log(typeof b);
var c = {};
console.log(typeof c);
var d = [];
console.log(typeof d);
console.log(Object.prototype.toString.call(d));
function Person(name){
    this.name = name;
}
var e = new Person("Jane");
console.log(typeof e);
console.log(e instanceof Person);
console.log(typeof undefined);
console.log(typeof null);
/*
app.js:2 number
app.js:4 string
app.js:6 object
app.js:8 object
app.js:9 [object Array]
app.js:14 object
app.js:15 true
app.js:16 undefined
app.js:17 object
*/