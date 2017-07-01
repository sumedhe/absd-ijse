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

            var html = "<table> \
                            <tr> \
                                <th>Customer Id</th> \
                                <th>Customer Name</th> \
                                <th>Customer Address</th> \
                            </tr>";

            xml.find("Root Customers Customer").each(function(){
                html += "<tr> \
                            <td>" + $(this).attr("CustomerID") + "</td> \
                            <td>" + $(this).find("ContactName").text() + "</td> \
                            <td>" + $(this).find("Address").text() + "</td> \
                         </tr>";
            });

            html += "</table>";
            $("#div-output").html(html);
        }
    };

    // (3)
    httpRequest.open('GET','customer_database.xml',true);

    // (4)

    // (5)
    httpRequest.send();

});
