<%--
  Created by IntelliJ IDEA.
  User: Oshan
  Date: 5/13/2017
  Time: 10:45 AM
  To change this template use File | Settings | File Templates.
--%>
<%@page import="com.mysql.jdbc.PreparedStatement"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.DriverManager"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>Add student</title>
    </head>
    <body>
        <form action="add.jsp">
            Name <input type="text" name="std_name"></br>
            Telephone <input type="text" name="std_tele"></br>
            <input type="submit" value="Add">
        </form>

        <%
            String db = "absd";
            String user = "root"; 
            try {
                java.sql.Connection con;
                Class.forName("com.mysql.jdbc.Driver");
                con = DriverManager.getConnection("jdbc:mysql://localhost/" + db, user, "root");
                
                String name = request.getParameter("std_name");
                String telephone = request.getParameter("std_tele");
                
                if(name != null && telephone != null){
                    PreparedStatement preparedStatement = (PreparedStatement) con.prepareStatement("INSERT INTO " +
                    "student(name, telephone) " +
                    "VALUES(?, ?)");
                    preparedStatement.setString(1, request.getParameter("std_name"));
                    preparedStatement.setString(2, request.getParameter("std_tele"));

                    preparedStatement.execute();
                    
                    out.println("Student successfully added");
                }
            } catch (SQLException e) {
                out.println("SQLException caught: " + e.getMessage());
            }
        %>
    </body>
</html>
