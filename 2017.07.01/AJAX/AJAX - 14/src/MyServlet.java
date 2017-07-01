import com.google.gson.Gson;

import javax.servlet.ServletException;
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

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Gson myGson = new Gson();

        Customer c1 = new Customer("Oshan", "Colombo");
        String jsonString = myGson.toJson(c1);

        response.setContentType("application/json");

        try(PrintWriter out = response.getWriter()){
            out.println(jsonString);
        }
    }

    private class Customer{
        private String name;
        private String address;

        public Customer(String name, String address) {
            this.name = name;
            this.address = address;
        }
    }
}
