document.write("<h2>");

var myBoolean = new Boolean(true);
document.write("myBoolean's primitive value : " + myBoolean.valueOf() + "<br>");

var myString = new String("     Hello, IJSE        ");

document.write("String : <pre>" + myString + "</pre>");
document.write("String Length : " + myString.length + "<br>");
document.write("Character at 2 : " + myString.charAt(2) + "<br>");
document.write("Character code of `" +  myString.charAt(2) + "` : " +  myString.charCodeAt(2) + "<br>");
document.write("Begining index of `llo` : " + myString.indexOf("llo") + "<br>");
document.write("Begining index of `Test` : " + myString.indexOf("Test") + "<br>");
document.write("To Lower Case : " + myString.toLowerCase() + "<br>");
document.write("To Upper Case : " + myString.toUpperCase() + "<br>");

var trimmedLeft = myString.trimLeft();
document.write("Trimmed Left : <pre>" + trimmedLeft + "</pre>");

var trimmedRight = myString.trimRight();
document.write("Trimmed Right : <pre>" + trimmedRight + "</pre>");

var trimmed = myString.trim();
document.write("Trimmed : <pre>" + trimmed + "</pre>");

var words = trimmed.split(",");
document.write("Word 1 : " + words[0] + "<br>");
document.write("Word 2 : " + words[1] + "<br>");

var subString = trimmed.substring(1,2);   // starting index, end index
document.write("substring returns : " + subString + "<br>");

var substr = trimmed.substr(2,2); // starting index, length = (starting index+length)
document.write("substr returns : " + substr + "<br>");

var myNumber = new Number(10.25);

var result = isNaN(myNumber);

document.write("myNumber isNaN : " + result + "<br>");

result = isNaN("Test");

document.write("`Test` isNaN : " + result + "<br>");

result = Number.isNaN(myNumber.valueOf());

document.write("myNumber Number.isNaN : " + result + "<br>");

result = Number.isNaN("Test");

document.write("`Test` Number.isNaN : " + result + "<br>");

result = isFinite(10.25);

document.write("myNumber isFinite : " + result + "<br>");

result = isFinite(10/0);

document.write("'10/0' isFinite : " + result + "<br>");

result = Number.isFinite(10.25);
    
document.write("myNumber Number.isFinite : " + result + "<br>");

result = Number.isFinite(10/0);

document.write("'10/0' Number.isFinite : " + result + "<br>");

result = Number.isInteger(10.25);

document.write("10.25 Number.isInteger : " + result + "<br>");

myNumber = new Number(10);
result = Number.isInteger(myNumber);

document.write("myNumber Number.isInteger : " + result + "<br>");

myNumber = new Number(10.25);
document.write("myNumber's exponetial : " + myNumber.toExponential() + "<br>");

myNumber = new Number(10);
document.write("10 toFixed : " + myNumber.toFixed(2) + "<br>");

myNumber = new Number(10.2999);
document.write("10.2999 toFixed : " + myNumber.toFixed(2) + "<br>");

myNumber = new Number(10);
document.write("10 toPrecision : " + myNumber.toPrecision(3) + "<br>");

myNumber = new Number(10.2999);
document.write("10.2999 toPrecision : " + myNumber.toPrecision(3) + "<br>");

document.write("0.3 - 0.2 = " + (0.3-0.2) + "<br>");

var big1 = new Big(0.3);

var big2 = new Big(0.2);

document.write("0.3 - 0.2 = " + big1.minus(big2) + "<br>");

document.write("2.523 x 4.2 = " + new Big(2.523).times(4.2).toFixed(2)  + "<br>");

document.write("</h2>");
