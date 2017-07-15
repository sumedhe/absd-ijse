<%--
  Created by IntelliJ IDEA.
  User: Oshan
  Date: 5/13/2017
  Time: 10:45 AM
  To change this template use File | Settings | File Templates.
--%>
<%@page import="java.sql.ResultSet"%>
<%@page import="java.sql.DriverManager"%>
<%@page import="com.mysql.jdbc.PreparedStatement"%>
<%@page import="java.sql.SQLException"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>Delete student</title>
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
                
                String preTele = request.getParameter("std_tele");
                if(preTele != null){
                    preparedStatement = (PreparedStatement) con.prepareStatement("DELETE FROM student WHERE telephone = ?");
                    preparedStatement.setString(1, preTele);
                    
                    preparedStatement.execute();
                }

                preparedStatement = (PreparedStatement) con.prepareStatement("SELECT * FROM student");
                     
                out.println("<form action=\"delete.jsp\">");
                out.println("<select name=\"std_tele\">");
            
                ResultSet resultSet = preparedStatement.executeQuery();
                while(resultSet.next()){
                    String telephone = resultSet.getString("telephone");
                    
                    out.println("<option value=\"" + telephone + "\">" + telephone + "</option>");
                }
                
                out.println("</select></br>");
                out.println("<input type=\"submit\" value=\"Delete\">");
                out.println("</form>");
                
                if(preTele != null){
                    out.println("Student successfully deleted");
                }
            } catch (SQLException e) {
                out.println("SQLException caught: " + e.getMessage());
            }
        %>
    </body>
</html>
