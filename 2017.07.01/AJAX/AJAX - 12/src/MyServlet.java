import javax.json.Json;
import javax.json.JsonObjectBuilder;
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
        JsonObjectBuilder myJson = Json.createObjectBuilder();

        myJson.add("name", "IJSE");
        myJson.add("location", "location");
        myJson.add("extra", "This is extra info");

        String jsonString = myJson.build().toString();

        response.setContentType("application/json");

        try(PrintWriter out = response.getWriter()){
            out.println(jsonString);
        }
    }
}
