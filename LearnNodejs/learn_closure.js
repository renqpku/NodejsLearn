var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return function(){
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());


var name1 = "The Window";
var object1 = {
    name1 : "My Object",
    getNameFunc : function(){
        var that = this;
        return function(){
            return that.name1;
        };
    }
};
console.log(object1.getNameFunc());