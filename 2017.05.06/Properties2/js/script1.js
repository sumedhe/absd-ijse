//var student = {
//    _name:"Oshan",
//    get name(){
//        return this._name;
//    },
//    set name(name){
//        this._name = name;
//    },
//    age:22,
//    institute:"UCSC",
//    toString:function(){
//        return this.name + " , " + this.age + " , " + this.institute;
//    }
//};
//
//Object.defineProperties(student, {
//    institute:{
//        writable:false
//    },
//    
//    toString:{
//        writable:false
//    }
//})
//
//console.log(student.name);
//console.log(student.age);
//console.log(student.institute);
//console.log(student.toString());
//
//student.toString = function(){
//    return kkk;
//}
//console.log(student.toString());

var customer = {
    _name : "Oshan Mudannayake",
    _address : "Colombo road, Dambokka, Boyagane",
    _telehpone : "0719084020",
    get name(){
        return this._name;  
},
    set name(name){
        this._name = name;
    },
        get address(){
            return this._address;
        },
    set address(address){
        this._address = address;
    },
        get telephone(){
            return this._telehpone;
        },
        set telephone(telephone){
            this._telehpone = telephone;
        },
    toString(){
        l1 = "Name : " + this._name;
        l2 = "Address : " + this._address;
        l3 = "Telephone : " + this._telehpone;
        return l1 + " - " + l2 + " - " + l3;
    }
};

Object.defineProperties(customer, {
   _name : {
       enumerable : false
   },
    _address : {
        enumerable : false
    },
    _telephone : {
        enumerable : false
    },
    toString : {
        enumerable : true,
        writable : false
    }
});

for(p in customer){
    console.log(p);
}

console.log(customer.toString());
customer.toString = function(){
    return "-";
}
console.log(customer.toString());