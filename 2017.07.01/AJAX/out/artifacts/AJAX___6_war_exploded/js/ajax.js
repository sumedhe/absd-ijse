$("#btn-read").click(function(){

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

            $("#div-output").text(httpRequest.responseText);

        }
    };

    // (3)
    httpRequest.open('GET','abc',false);

    // (4)

    // (5)
    httpRequest.send();

    alert("Request has been sent");

});
