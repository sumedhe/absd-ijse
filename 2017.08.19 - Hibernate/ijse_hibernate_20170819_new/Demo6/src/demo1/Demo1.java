/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo1;

import edu.ijse.model.Student;
import edu.ijse.model.Teacher;
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

        Student student1 = new Student();
        student1.setStudentName("kamal");

        Teacher t1 = new Teacher();
        t1.setTeacherName("t1");
        Teacher t2 = new Teacher();
        t2.setTeacherName("t2");

        student1.getTeachers().add(t1);
        student1.getTeachers().add(t2);

        session.save(student1);
        session.getTransaction().commit();

        System.out.println("Done");
    }

}
