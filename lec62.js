Array.prototype.myCustomFeature = 'cool';
var arr =['John','Jane','Jim'];
//problem 
for(var temp in arr){
    console.log(temp+" "+arr[temp]);
}
//solution
console.log("-------------");
for(var i=0;i<arr.length;i++)
{
    console.log(i+" "+arr[i]);
}
/*
app.js:5 0 John
app.js:5 1 Jane
app.js:5 2 Jim
app.js:5 myCustomFeature cool
app.js:8 -------------
app.js:11 0 John
app.js:11 1 Jane
app.js:11 2 Jim
*/