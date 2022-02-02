function greet(name){
    name = name||"Parth"
    console.log("hello "+name);
}
greet();
greet("Tom")
/*
app.js:2 hello undefined
*/
/*
app.js:3 hello Parth
app.js:3 hello Tom
*/