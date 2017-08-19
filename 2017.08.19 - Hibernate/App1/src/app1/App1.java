/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package app1;

import model.Student;
import org.hibernate.Session;
import util.HibernateUtil;

/**
 *
 * @author ivantha
 */
public class App1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        
        session.beginTransaction();
        
        Student student = new Student();
        student.setStudentName("Oshan");
        
        session.save(student);
        
        session.getTransaction().commit();
    }
    
}
