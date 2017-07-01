$("#btn-test").click(function(){

    // (1)

    var httpRequest;

    if (window.XMLHttpRequest){
        httpRequest = new XMLHttpRequest();
    }else if(window.ActiveXObject){
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // (2)

    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === 4 && httpRequest.status === 200){
            var xml = $(httpRequest.responseXML);
            var partner = xml.find("paala partner").text();

            $("#div-output").text("Paalagea Partner : " + partner);

            var palageasbawaya = xml.find("paala").attr("hodai");
            $("#div-output").html($("#div-output").text() + "<br>" +
                    "Paalagea Sabawaaya Hodai: " + palageasbawaya);
        }
    };

    // (3)
    httpRequest.open('GET','database.xml',true);

    // (4)
    httpRequest.setRequestHeader("Accept","application/json");

    // (5)
    httpRequest.send();

});
