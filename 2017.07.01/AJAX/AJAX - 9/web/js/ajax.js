$("#btn-addnewcustomer").click(function(){

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

    // var queryString = "txt-customerid=" + encodeURIComponent($("#txt-customerid").val())
    //             + "&txt-customername=" + encodeURIComponent($("#txt-customername").val())
    //             + "&txt-customeraddress=" + encodeURIComponent($("#txt-customeraddress").val())
    var queryString = $("#frm-customer").serialize();

    // (3)
    httpRequest.open('POST','add-new-customer' ,true);

    // (4)
    httpRequest.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    // (5)
    httpRequest.send(queryString);

});

