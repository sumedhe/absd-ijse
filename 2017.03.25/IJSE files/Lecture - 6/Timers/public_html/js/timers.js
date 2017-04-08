//var count = 0;
//
//function print(value){
//    document.writeln("<h1>" + value + "</h1>");
//    count++;
//    if (count === 9){
//        clearInterval(timerId);
//    }
//}
//
//var timerId = setInterval(print,1000,"IJSE");

//function invokeLater(){
//    document.write("<h1>I have been invoked by this damn browser lately</h1>");
//}
//
//setTimeout(invokeLater, 5000);
var i = 0;
function changeBackgroundColor() {
    var colors = ["blue", "green", "red", "white", "yellow"];
    $("body").css("background-color", colors[i]);
    i++;
    if (i === colors.length) {
        i = 0;
    }
}

var txt = $("h1").text();
var chars = new Array();
for (var ii = 0; ii < txt.length; ii++) {
    chars[ii] = txt.substring(ii, (ii + 1));
}

$("h1").text("");
var j = 0;
function animateText() {
    if (j === chars.length) {
        j = 0;
        $("h1").text("");
    }
    $("h1").text($("h1").text() + chars[j]);
    j++;

}

$("body").mousemove(moving_onbody);

function moving_onbody(eventData){
    $("h1").css("left",eventData.pageX + "px");
    $("h1").css("top",eventData.pageY + "px");
}

setInterval(animateText, 100);
setInterval(changeBackgroundColor, 1000);