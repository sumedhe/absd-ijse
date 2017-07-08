<%-- 
    Document   : index
    Created on : Jul 8, 2017, 9:58:38 AM
    Author     : ivantha
--%>

<%@page import="java.util.HashMap"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>ArrayList test</title>
    </head>
    <body>
        <% ArrayList<String> list = new ArrayList<>();
            list.add("a");
            list.add("b");
            list.add("c");
            request.setAttribute("myList", list);
            
            HashMap<String, String> map = new HashMap<>();
            map.put("a", "kamal");
            map.put("b", "ajith");
            map.put("c", "nimal");
            request.setAttribute("myMap", map);
        %>
        
        ${myList['0']}<br>
        ${myMap['b']}<br>
        ${myMap[myList['1']]}
        
    </body>
</html>
