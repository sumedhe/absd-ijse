<%-- 
    Document   : index
    Created on : Jul 15, 2017, 9:42:44 AM
    Author     : ivantha
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="crud" tagdir="/WEB-INF/tags/" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>My CRUD operations</title>
    </head>
    <body>
        <crud:createtag name="Oshan" telephone="0719084020"/>
        <crud:createtag name="Sanda" telephone="0717265720"/>
        <crud:retrievetag telephone="0719084020"/>
        <crud:retrievetag telephone="0712761631"/>
        <crud:retrievetag telephone="0717265720"/>
    </body>
</html>
