//by value(primitive)
var a =3;
var b =a;
a++;
console.log(a);
console.log(b);
//by reference(all objects (including functions))
var c = {greeting:"hi"};
var d;
d = c;
c.greeting="hello";
console.log(c);
console.log(d);
// by ref even as parameter
function changeGreeeting(obj){
    obj.greeting = "Hola";// mutate
}
changeGreeeting(d);
console.log(c);
console.log(d);
// equals operator sets up new memory space(new addr)
c = {greeting:"howdy"};
console.log(c);
console.log(d);
/*
app.js:5 4
app.js:6 3
app.js:12 {greeting: 'hello'}
app.js:13 {greeting: 'hello'}
app.js:19 {greeting: 'Hola'}
app.js:20 {greeting: 'Hola'}
app.js:23 {greeting: 'howdy'}
app.js:24 {greeting: 'Hola'}
*/