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
            var jsonArray = JSON.parse(httpRequest.responseText);

            for(var index in jsonArray){
                var myObj = jsonArray[index];
                var html = "<tr> \
                                <td>" + myObj.index + "</td> \
                                <td>" + myObj.name + "</td> \
                                <td>" + myObj.gender + "</td>\
                                <td>" + myObj.company + "</td> \
                                <td>" + myObj.email + "</td> \
                                <td>" + myObj.phone + "</td>\
                            </tr>";
                $("#div-output table tbody").append(html);
            }

        }
    };

    // (3)
    httpRequest.open('GET','customer_database.json',true);

    // (4)

    // (5)
    httpRequest.send();

});
