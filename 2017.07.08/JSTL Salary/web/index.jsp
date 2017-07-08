<%-- 
    Document   : index
    Created on : Jul 8, 2017, 11:29:54 AM
    Author     : ivantha
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSTL Salary Example</title>
    </head>
    <body>
        <form>
            Person 1  <input type="text" name="p1"><br>
            Person 2  <input type="text" name="p2"><br>
            Person 3  <input type="text" name="p3"><br>
            Person 4  <input type="text" name="p4"><br>
            Person 5  <input type="text" name="p5"><br>
            <input type="submit">
        </form>
        
        <c:if test="${param.p1>5000}">
            Person 1<br>
        </c:if>
        <c:if test="${param.p2>5000}">
            Person 2<br>
        </c:if>
        <c:if test="${param.p3>5000}">
            Person 3<br>
        </c:if>
        <c:if test="${param.p4>5000}">
            Person 4<br>
        </c:if>
        <c:if test="${param.p5>5000}">
            Person 5<br>
        </c:if>
    </body>
</html>
