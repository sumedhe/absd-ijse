/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package demo1;

import edu.ijse.model.Book;
import edu.ijse.model.Student;
import java.util.List;
import org.hibernate.Criteria;
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

        Book book=new Book();
        book.setBookName("bbbsasa");
        
        Student student = new Student();
        student.setStudentName("kamal");
        student.setBook(book);

        session.save(student);
        
        ///////////////////////////////////////////////        
        Criteria criteria= session.createCriteria(Student.class);
        List students=criteria.list();
        for(int i=0;i<students.size();i++){
            Student s=(Student) students.get(i);            
            System.out.println("dddd:"+s);
        }
        
        ////////////////
        
        session.getTransaction().commit();
        System.out.println("Done");
    }

}
