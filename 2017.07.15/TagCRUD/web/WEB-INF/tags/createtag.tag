<%-- 
    Document   : createtag
    Created on : Jul 15, 2017, 9:44:53 AM
    Author     : ivantha
--%>

<%@tag import="java.util.HashMap"%>
<%@tag description="put the tag description here" pageEncoding="UTF-8"%>

<%@attribute name="name"%>
<%@attribute name="telephone"%>

<%
    Object o = application.getAttribute("student_map");
    if(o == null){
        o = new HashMap<>();
    }
    HashMap<String, String> studentMap = (HashMap)o;
    
    studentMap.put(telephone, name);
%>

Create<br>
Name : ${name}<br>
Telephone : ${telephone}<br>
----------------------------------------------------<br>