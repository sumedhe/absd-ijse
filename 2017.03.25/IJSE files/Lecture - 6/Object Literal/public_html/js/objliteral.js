//var myObj = {
//    
//    testProperty1 : "This is a test property 1",
//    testProperty2 : 10,
//    
//    testMethod1 : function(){
//        document.write("<h1>" + this.testProperty1 + "<h1>");
//    },
//    
//    testMethod2 : function(name){
//        return "This is test method 2";
//    }
//    
//};
//
//myObj.name = "Test";

//alert(myObj.name);
//
//delete myObj.name;
//
//alert(myObj.name);

//myObj.age = 10;
//
//myObj.printName = printName;
//
//function printName(){
//    alert(this.age);
//}
//
//myObj.printName();
//
//myObj.testMethod1();

//alert(myObj.testMethod2("Test"));

var Student = {

    name: "",
    nic: "",
    frontEndMarks: 0,
    backEndMarks: 0,

    isFrontEndPassed: function () {
        return (this.frontEndMarks >= 75) ? "Passed" : "Failed";
    },

    isBackEndPassed: function () {
        return (this.backEndMarks >= 75) ? "Passed" : "Failed";
    },

    getTotalMarks: function () {
        return (parseInt(this.frontEndMarks) + parseInt(this.backEndMarks));
    },

    getAvgMarks: function () {
        return ((parseInt(this.frontEndMarks) + parseInt(this.backEndMarks)) / 2);
    }

};

$("#btnShowDetails").click(function(){
    Student.name = $("#txtName").val();
    Student.nic = $("#txtNIC").val();
    Student.frontEndMarks = $("#txtFrontEndMarks").val();
    Student.backEndMarks = $("#txtBackEndMarks").val();    
    $("#dName").text(Student.name);
    $("#dNIC").text(Student.nic);
    $("#dFrontEndMarks").text(Student.frontEndMarks);
    $("#dBackEndMarks").text(Student.backEndMarks);
    $("#dFontEndStatus").text(Student.isFrontEndPassed());
    $("#dBackEndStatus").text(Student.isBackEndPassed());
    $("#dTotalMarks").text(Student.getTotalMarks());
    $("#dAvgMarks").text(Student.getAvgMarks());
    
});