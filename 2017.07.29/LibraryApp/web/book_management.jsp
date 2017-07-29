<%-- 
    Document   : book_management
    Created on : Jul 29, 2017, 11:45:40 AM
    Author     : ivantha
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Library</title>
    </head>
    <body>
        <form action="BookController">
            Name: <input type="text" name="name"><br>
            Author: <input type="text" name="author"><br>
            ISBN: <input type="text" name="isbn"><br>
            <input type="submit"><br>
        </form>
    </body>
</html>
