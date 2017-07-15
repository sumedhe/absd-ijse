<%-- 
    Document   : update
    Created on : Jul 12, 2017, 10:56:15 AM
    Author     : ivantha
--%>

<%@page import="java.sql.DriverManager"%>
<%@page import="com.mysql.jdbc.PreparedStatement"%>
<%@page import="java.sql.SQLException"%>
<%@page import="java.sql.ResultSet"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Update student</title>
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
                    String newName = request.getParameter("std_new_name");
                    String newTelephone = request.getParameter("std_new_tele");
                    
                    preparedStatement = (PreparedStatement) con.prepareStatement("UPDATE student SET " +
                    "name = ?, telephone = ? WHERE telephone = ?");
                    preparedStatement.setString(1, newName);
                    preparedStatement.setString(2, newTelephone);
                    preparedStatement.setString(3, preTele);
                    
                    preparedStatement.execute();
                }

                preparedStatement = (PreparedStatement) con.prepareStatement("SELECT * FROM student");
                     
                out.println("<form action=\"update.jsp\">");
                out.println("<select name=\"std_tele\">");
            
                ResultSet resultSet = preparedStatement.executeQuery();
                while(resultSet.next()){
                    String telephone = resultSet.getString("telephone");
                    
                    out.println("<option value=\"" + telephone + "\">" + telephone + "</option>");
                }
                
                out.println("</select></br>");
                out.println("New name <input type=\"text\" name=\"std_new_name\"></br>");
                out.println("New telephone <input type=\"text\" name=\"std_new_tele\"></br>");
                out.println("<input type=\"submit\" value=\"Update\">");
                out.println("</form>");
                
                if(preTele != null){
                    out.println("Student successfully updated");
                }
            } catch (SQLException e) {
                out.println("SQLException caught: " + e.getMessage());
            }
        %>
    </body>
</html>
