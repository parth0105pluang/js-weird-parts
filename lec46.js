function x(){
    var a = 7;
    return function y(){
        console.log(a);
    }
}
var c = x();
c();