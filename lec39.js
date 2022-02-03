function greet(firstname,lastname,language,...others){
    language = language||'en';
    //console.log(firstname);
    //console.log(lastname);
    //console.log(language);
    console.log(arguments);
    console.log(others);
}
//greet();
greet("parth","sharma","jammu","extrapram","random");
/*
app.js:3 undefined
app.js:4 undefined
app.js:5 en
app.js:6 Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]callee: ƒ greet(firstname,lastname,language)length: 0Symbol(Symbol.iterator): ƒ values()[[Prototype]]: Object
app.js:3 parth
app.js:4 sharma
app.js:5 en
app.js:6 Arguments(2) ['parth', 'sharma', callee: ƒ, Symbol(Symbol.iterator): ƒ]
*/
