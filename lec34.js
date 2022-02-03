//consider function to be an object with code one of it's property
function greet(){
    console.log("hi");
}
greet();
//adding a property to a function
greet.addedProperty=true;
console.log(greet.addedProperty);
