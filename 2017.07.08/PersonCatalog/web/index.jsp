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
        <title>Student Management System</title>
    </head>
    <body>
        <div style="display: inline-block; vertical-align: top;">
            <ul style="list-style:none; margin: 0px 30px;"> 
                <li style="margin: 10px 0px;"><a href="add.jsp" target="myTab">Add</a></li>
                <li style="margin: 10px 0px;"><a href="update.jsp" target="myTab">Update</a></li>
                <li style="margin: 10px 0px;"><a href="delete.jsp" target="myTab">Delete</a></li>
                <li style="margin: 10px 0px;"><a href="view.jsp" target="myTab">View</a></li>
            </ul>  
        </div>      
        <div style="display: inline-block;">
            <iframe src="" width ="700" height="400" name="myTab"> </iframe>
        </div>
    </body>
</html>
