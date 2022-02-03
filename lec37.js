function a(){
    console.log(this);
    this.newvariable = "hello";
}
var b = function(){
    console.log(this);
}
a();
console.log(newvariable);
b();
var c = {
    name:"the c object",
    log: function(){
        var self = this;
        self.name = "updated c object";
        console.log(self);
        var setname = function(newname){
            self.name=newname;
        }
        setname("Updated again the c object");
        console.log(self);
    }
}
c.log();
/*
app.js:2 Window 
app.js:9 hello
app.js:6 Window {window: Window, self: Window, document: document, name: '', location: Location, …}
app.js:16 {name: 'updated c object', log: ƒ}
app.js:21 {name: 'Updated again the c object', log: ƒ}
*/