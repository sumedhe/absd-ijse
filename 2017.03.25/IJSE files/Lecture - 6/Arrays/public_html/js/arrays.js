var myArray = [30,20,10,50,40];

document.write("<h2>");

document.write("myArray = {" + myArray + "}<br>");

document.write("Length of Array = " + myArray.length  +"<br>");

myArray.push(60);

document.write("After Pushing = {" + myArray + "}<br>");

myArray.pop();

document.write("After Popping = {" + myArray + "}<br>");

myArray.unshift("00");

document.write("After Unshifting = {" + myArray + "}<br>");

myArray.shift();

document.write("After Shiftting = {" + myArray + "}<br>");

document.write("Index of `10` in myArray is : " + myArray.indexOf(10) + "<br>");

document.write("Index of `100` in myArray is : " + myArray.indexOf(100) + "<br>");

var removedItem = myArray.splice(2,1);

document.write("Removed Item : "+ removedItem + "<br>");

document.write("After removing 2nd Element = {" + myArray + "}<br>");

var copiedArray = myArray.slice();

document.write("Copied Array : " + copiedArray + "<br>");

var reversedArray = myArray.reverse();

document.write("Reversed Array : " + reversedArray + "<br>");

var sortedArray = myArray.sort();

document.write("Sorted Array : " + sortedArray + "<br>");

document.write("</h2>");