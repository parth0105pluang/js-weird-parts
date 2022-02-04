function person(fname,lname){
    console.log(this);
    this.fname=fname;
    this.lname=lname;
    console.log("This is a constructor");
}
var john = new person("Parth","Sharma");
console.log(john);
var jane = new person("Jane","Gupta");
console.log(jane);function person(fname,lname){
    console.log(this);
    this.fname=fname;
    this.lname=lname;
    console.log("This is a constructor");
}
var john = new person("Parth","Sharma");
console.log(john);
var jane = new person("Jane","Gupta");
console.log(jane);