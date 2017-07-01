$("#btn-readjson").click(function(){

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
            var myObj = JSON.parse(httpRequest.responseText);

            // var outputText = "1 : " + myObj[0] + "<br/>" +
            //                  "2 : " + myObj[1] + "<br/>" +
            //                  "3 : " + myObj[2] ;
            //
            // $("#div-output").html(outputText);

            // var myObj = JSON.parse(httpRequest.responseText);
            // var outputText = "Name : " + myObj.name + "<br/>" +
            //                  "Age : " + myObj.age + "<br/>" +
            //                  "Location : " + myObj.location ;
            //
            // $("#div-output").html(outputText);
        }
    };

    // (3)
    httpRequest.open('GET','database.json',true);

    // (4)

    // (5)
    httpRequest.send();

});
