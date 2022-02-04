function person(fname,lname){
    console.log(this);
    this.fname=fname;
    this.lname=lname;
    console.log("This is a constructor");
}
person.prototype.getFullName = function(){
    return this.fname+" "+this.lname;
}
var john = new person("Parth","Sharma");
console.log(john);
var jane = new person("Jane","Gupta");
console.log(jane);
console.log(jane.getFullName());
