<%-- 
    Document   : index
    Created on : Jul 8, 2017, 9:13:32 AM
    Author     : ivantha
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Expression Language</title>
    </head>
    <body>
        <%
            request.setAttribute("name", "ijse1");          //2
            session.setAttribute("name", "ijse2");          //3
            application.setAttribute("name", "ijse3");      //4
            pageContext.setAttribute("name", "ijse4");      //1
        %>
        ${name}
        ${request.name}
    </body>
</html>
