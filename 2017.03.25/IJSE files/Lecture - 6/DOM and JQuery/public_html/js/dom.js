//var RS = jQuery.noConflict();

//$("#txtHello").text("<strong>Galle</strong>");
//$("#txtHello").html("<strong>Galle</strong>");
//$("#txtHello").css("color","red");
//$("div ul li:last-child").html("<img src='images/1.jpg' width='500' height='500'>");
//$("h1").attr("title","Mouse on Me");

//$("#txtHello").parent().find("li").last().remove();
//$("#txtHello").parent().children().last().remove();

$("#txtHello").parent().parent().parent().contents("h1").text("I changed");
$("#txtHello").parent().parent().
        parent().append("<h1>New Tag</h1>");