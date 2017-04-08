$("#li-hello").parent().children().last().remove();
$("#li-hello").parents("div").children("p").replaceWith("<img width='100' height='50' src='images/ijse-logo.png'/>")
$("#li-hello").parents("div").children("img").after("<h1>IJSE</h1>");
var clone = $("#li-hello").parent().clone();
$("#li-hello").parents("div").prepend(clone);