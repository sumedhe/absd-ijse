<%-- 
    Document   : view
    Created on : Jul 12, 2017, 10:55:54 AM
    Author     : ivantha
--%>

<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.ResultSet"%>
<%@page import="com.mysql.jdbc.PreparedStatement"%>
<%@page import="java.sql.DriverManager"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>View students</title>
    </head>
    <body>
        <%
            String db = "absd";
            String user = "root";
            try {
                java.sql.Connection con;
                Class.forName("com.mysql.jdbc.Driver");
                con = DriverManager.getConnection("jdbc:mysql://localhost/" + db, user, "root");
                PreparedStatement preparedStatement;

                preparedStatement = (PreparedStatement) con.prepareStatement("SELECT * FROM student");
            
                ResultSet resultSet = preparedStatement.executeQuery();
                while(resultSet.next()){
                    String name = resultSet.getString("name");
                    String telephone = resultSet.getString("telephone");
                    
                    out.println(name + " - " + telephone + "<br>");
                }
            } catch (SQLException e) {
                out.println("SQLException caught: " + e.getMessage());
            }
        %>
    </body>
</html>
