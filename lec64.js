class Person{
    constructor(firstname,lastname){
      this.firstname=firstname;
      this.lastname=lastname;  
    }
    greet(){
        return 'Hi'+this.firstname;
    }
}
var john = new Person('John','Doe');
console.log(john.greet());
class InformalPerson extends Person{
    constructor(firstname,lastname){
      super(firstname,lastname); 
    }
    greet(){
        return 'yo'+this.firstname;
    }
}
var jon = new InformalPerson('Jon','Doe');
console.log(jon.greet());