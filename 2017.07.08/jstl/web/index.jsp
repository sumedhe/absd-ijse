<%-- 
    Document   : index
    Created on : Jul 8, 2017, 11:16:02 AM
    Author     : ivantha
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSTL</title>
    </head>
    <body>
        <%--<c:out value="Hello IJSE"></c:out>--%>
        
        <%
            request.setAttribute("val", 2);
        %>
        
        <c:if test="${val>1}">
            Big amount
        </c:if>
    </body>
</html>
