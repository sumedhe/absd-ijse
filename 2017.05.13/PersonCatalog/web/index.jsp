<%-- 
    Document   : index
    Created on : May 13, 2017, 10:40:56 AM
    Author     : Oshan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Person catalog</title>
    </head>
    <body>
        <div>
            <ul>
                <li><a href="add.jsp" target="myTab">Add</a></li>
                <li><a href="ViewServlet" target="myTab">View</a></li>
                <li><a href="search.jsp" target="myTab">Search</a></li>
                <li><a href="update.jsp" target="myTab">Update</a></li>
                <li><a href="delete.jsp" target="myTab">Delete</a></li>
            </ul>  
        </div>      
        <div>
            <iframe src="" width ="600" height="300" name="myTab"> </iframe>
        </div>
    </body>
</html>
