var output = $("#output");
var myString = "Hi, If you have any sort of RegEx related problems, just contact IJSE : 071-1202202, 037-2237706, 071-9084020 \
                All of your problems will vanish in seconds.";
output.append("MyString : " + myString + "<hr>");

//Method 1
//var regExp = new RegExp("IJSE", "g");

//Method 2
var regExp = /IJSE/g;

var result = regExp.test(myString);
output.append("myString has IJSE : " + result + "</br>");

var myReg1 = /\d{3}-\d{7}/g;
var myReg1Result = myReg1.test(myString);
output.append("myString has number : " + myReg1Result + "</br>");

var myRegResult2 = myString.match(/\d{3}-\d{7}/g);
output.append("myString has number : " + myRegResult2 + "</br>");

var myRegResult3 = myString.match(/problem/g);
output.append("myString has word 'problem' : " + myRegResult3 + "</br>");
