var student = {
    name        : "Kamal",
    age         : 21,
    school      : "IJSE",
    displayInfo : function(){
        console.log("Name : " + this.name);
        console.log("Age : " + this.age);
        console.log("School : " + this.school);
    }
}

student.displayInfo();

student = new Object();

student.name = "Kamal";
student.age = 21;
student.school = "IJSE";
student.displayInfo = function(){
    console.log("Name : " + this.name);
    console.log("Age : " + this.age);
    console.log("School : " + this.school);
}

student.displayInfo();

var pos = {
    _x          : 0,
    _y          : 0,
    setX        : function(x){
        this._x = x;
    },
    setY        : function(y){
        this._y = y;
    },
    getX        : function(){
        return this._x;
    },
    getY        : function(){
        return this._y;
    },
    printCords  : function(){
        console.log("X : " + this._x);
        console.log("Y : " + this._y);
    }
}

pos.setX(500);
pos.setY(200);
pos.printCords();

pos = new Object();

pos._x = 0;
pos._y = 0;
pos.setX = function(x){
    this._x = x;
}
pos.setY = function(y){
    this._y = y;
}
pos.getX = function(){
    return this._x;
}
pos.getY = function(){
    return this._y;
}
pos.printCords = function(){
    console.log("X : " + this._x);
    console.log("Y : " + this._y);
}

pos.setX(500);
pos.setY(200);
pos.printCords();
