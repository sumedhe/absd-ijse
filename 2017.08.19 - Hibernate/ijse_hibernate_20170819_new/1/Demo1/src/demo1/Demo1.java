/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo1;

import edu.ijse.model.Student;
import java.util.Date;
import org.hibernate.Session;

/**
 *
 * @author namal
 */
public class Demo1 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        System.out.println("Hibernate one to one (Annotation)");
        Session session = HibernateUtil.getSessionFactory().openSession();

        session.beginTransaction();

        Student student = new Student();
        student.setStudentName("kamal");

        session.save(student);
        session.getTransaction().commit();

        System.out.println("Done");
    }

}
