/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo1;

import edu.ijse.model.Student;
import edu.ijse.model.Subject;
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
        
        Subject s1=new Subject();
        s1.setSubjectName("sinhala");
        
        Subject s2=new Subject();
        s2.setSubjectName("ganao");
        
        
        student.getSubjects().add(s1);
        student.getSubjects().add(s2);

        session.save(student);
        session.getTransaction().commit();

        System.out.println("Done");
    }

}
