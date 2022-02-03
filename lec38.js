//js array need not hold values of same datatype
var arr = [
    1,
    false,
    {
        name:'Tony',
        address:"Random street"
    },
    function(name){
        var greeting = "Hello";
        console.log(greeting+name);
    },
    "hello"
    ];
    console.log(arr);
    arr[3](arr[2].name);