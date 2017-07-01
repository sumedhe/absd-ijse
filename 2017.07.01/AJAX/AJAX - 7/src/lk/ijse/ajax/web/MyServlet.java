package lk.ijse.ajax.web;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

/**
 * Created by ranjith-suranga on 6/17/17.
 */
public class MyServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/plain");
        InputStream fileStream = getServletContext().getResourceAsStream("/WEB-INF/classes/lk/ijse/ajax/db/database.txt");
        InputStreamReader inReader = new InputStreamReader(fileStream);
        BufferedReader bfReader = new BufferedReader(inReader);

        String line = null;
        String responseText = "";
        while((line = bfReader.readLine())!=null){
            responseText += line;
        }

        bfReader.close();
        PrintWriter out = response.getWriter();
        out.println(responseText);
        out.close();
    }
}
