var person = {
    firstname: "John",
    lastname: "Jom",
    getFullName:function(){
        var fullname=this.firstname+" "+this.lastname;
        return fullname;
    }
};
var logName = function(lang1,lang2){
    console.log("Logged:"+this.getFullName());
    console.log("Arguments"+lang1+" "+lang2);
    console.log("---");
}
var logPN = logName.bind(person);
logPN("en");
logName.call(person,'en','es');
logName.apply(person,['en','es']);
//functions currying
function multiply(a,b){
    return a*b;
}
var multipleByTwo = multiply.bind(this,2);
console.log(multipleByTwo(4));