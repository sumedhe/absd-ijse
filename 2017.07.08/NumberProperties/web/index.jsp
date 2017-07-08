<%-- 
    Document   : index
    Created on : Jul 8, 2017, 12:04:34 PM
    Author     : ivantha
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Number properties</title>
    </head>
    <body>
        <form>
            Please enter a number <input type="text" name="n"><br>
            <input type="submit">
        </form>

        <c:choose>
            <c:when test="${param.n >= 0}">
                Positive<br>
            </c:when>
            <c:otherwise>
                Negative<br>
            </c:otherwise>
        </c:choose>
                
        <c:choose>
            <c:when test="${param.n >100}">
                Greater than 100<br>
            </c:when>
            <c:otherwise>
                Less than 100<br>
            </c:otherwise>
        </c:choose>
                
        <c:choose>
            <c:when test="${param.n % 2 == 1}">
                Odd<br>
            </c:when>
            <c:otherwise>
                Even<br>
            </c:otherwise>
        </c:choose>
    </body>
</html>
