var objectLiteral ={
    firstname:"Mary",
    isAProgrammer: true
}
console.log(objectLiteral);
console.log(JSON.stringify(objectLiteral));
var jsonValue = JSON.parse('{"firstname":"Mary","isAProgrammer": true}');
console.log(jsonValue);
/*
json
{
    "firstname":"Mary",
    "isAProgrammer": true
}
json is a subset of js object notation
*/