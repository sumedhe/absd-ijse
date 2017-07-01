package lk.ijse.ajax.web;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by ranjith-suranga on 7/1/17.
 */
public class MyServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String customerId = request.getParameter("txt-customerid");
        String customerName = request.getParameter("txt-customername");
        String customerAddress = request.getParameter("txt-customeraddress");

        System.out.println(customerId);
        System.out.println(customerName);
        System.out.println(customerAddress);

        response.setContentType("text/html");
        try(PrintWriter out = response.getWriter();){
            if (customerId != null && customerName != null && customerAddress != null) {
                out.println("Customer has been successfully added");
            }else{
                out.println("Customer has been failed to add");
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
