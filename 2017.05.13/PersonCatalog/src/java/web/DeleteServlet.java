/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package web;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Oshan
 */
public class DeleteServlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String telephone = request.getParameter("telephone");

            File theFile = new File("E:\\the_file.txt");
            theFile.createNewFile();
            File tempFile = new File("E:\\temp_file.txt");
            tempFile.delete();
            tempFile.createNewFile();

            FileReader fileReader = new FileReader(theFile);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            FileWriter fileWriter = new FileWriter(tempFile, true);
            PrintWriter writer = new PrintWriter(fileWriter);

            boolean notFound = true;
            for(Object o: bufferedReader.lines().toArray()){
                String line = (String) o;
                String[] parts = line.split("-");
                if(parts[0].trim().equals(telephone)){
                    notFound = false;
                }else{
                    writer.println(line);
                }
            }
            
            if(notFound){
                out.print("The person with the telephone number, " + telephone + " is not found");
            }else{
                out.print("The person with the telephone number, " + telephone + " is successfully deleted");
            }
            
            writer.flush();
            
            fileReader.close();
            bufferedReader.close();
            fileWriter.close();
            writer.close();
            
            theFile.delete();
            tempFile.renameTo(new File("E:\\the_file.txt"));
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
