<%-- 
    Document   : retrievetag
    Created on : Jul 15, 2017, 9:51:21 AM
    Author     : ivantha
--%>

<%@tag import="java.util.HashMap"%>
<%@tag description="put the tag description here" pageEncoding="UTF-8"%>

<%@attribute name="telephone"%>

<%
    Object o = application.getAttribute("student_map");
    if(o == null){
        application.setAttribute("name", "Not found");
    }else{
        HashMap<String, String> studentMap = (HashMap)o;
   
        String retrievedName = studentMap.get(telephone);
        if(retrievedName == null){
            application.setAttribute("name", "Not found");
        }else{
            application.setAttribute("name", studentMap.get(telephone));   
        }
    }
    
%>

Retrieve<br>
Name : ${applicationScope.name}<br>
Telephone : ${telephone}<br>
----------------------------------------------------<br>