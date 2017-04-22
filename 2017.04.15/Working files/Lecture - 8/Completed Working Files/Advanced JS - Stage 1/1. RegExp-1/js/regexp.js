var output = $("#output");
var myString = "Hi, If you have any sort of RegEx related problems, just contact IJSE : 071-1202202. \
                All of your problems will vanish in seconds.";
output.append("MyString : " + myString + "<hr>");

var regEx = new RegExp("IJSE","g");

output.append("myString has IJSE : " + regEx.test(myString) + "<br>");
output.append("myString has 071-1202202 : " + /\d{3}-\d{7}/.test(myString) + "<br>")
output.append("myString has " + myString.match(/a/g).length + "<br>");