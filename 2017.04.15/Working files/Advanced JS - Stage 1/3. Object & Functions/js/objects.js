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