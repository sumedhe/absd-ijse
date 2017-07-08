<%-- 
    Document   : index
    Created on : Jul 8, 2017, 1:07:58 PM
    Author     : ivantha
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@page import="com.mysql.jdbc.jdbc2.optional.MysqlDataSource"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Database Application</title>
    </head>
    <body>
        <%
//            Class.forName("com.mysql.jdbc.Driver");
//            MysqlDataSource dataSource = new MysqlDataSource();
//            dataSource.setURL("jdbc:mysql://localhost:3306/absd");
//            dataSource.setUser("root");
//            dataSource.setPassword("root");
//            request.setAttribute("db", dataSource);
        %>
        
        <sql:setDataSource var="ds" driver="com.mysql.jdbc.Driver" url="jdbc:mysql://localhost:3306/absd"
                           user="root" password="root"></sql:setDataSource>
        
        <sql:query var="students" dataSource="${ds}">
            SELECT * FROM student;
        </sql:query>
            <table>
                <c:forEach var="row" items="${students.rows}">
                    <tr>
                        <td><c:out value="${row.id}"></c:out></td>
                    </tr>
                </c:forEach>
            </table>
    </body>
</html>
