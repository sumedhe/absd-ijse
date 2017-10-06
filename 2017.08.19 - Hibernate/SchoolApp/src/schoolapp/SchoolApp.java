/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package schoolapp;

import model.Bag;
import model.Student;
import model.Subject;
import model.Teacher;
import org.hibernate.Session;
import util.HibernateUtil;

/**
 *
 * @author ivantha
 */
public class SchoolApp {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        
        session.beginTransaction();
        
        Bag bag = new Bag();
        bag.setBagColor("Green");
        
        Student s1 = new Student();
        s1.setStudentName("Oshan");
        s1.setBag(bag);
        
        Student s2 = new Student();
        s2.setStudentName("No one");
        
        Teacher teacher = new Teacher();
        teacher.setTeacherName("A");
        teacher.getStudents().add(s1);
        teacher.getStudents().add(s2);
        
        Subject sub1 = new Subject();
        sub1.setSubjectName("Maths");
        
        Subject sub2 = new Subject();
        sub2.setSubjectName("Science");
        
        session.save(teacher);
        
        session.getTransaction().commit();
    }
    
}
