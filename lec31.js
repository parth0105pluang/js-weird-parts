var tony = {
    firstname:"Tony",
    lastname:"Sharma",
    address:{
    street:"Random Street",
    city:"New York" 
    }
};
function greet(person){
    console.log("Hi"+person.firstname+person.lastname);
}
greet(tony);
greet({firstname:"sharmil",lastname:"sharma"});