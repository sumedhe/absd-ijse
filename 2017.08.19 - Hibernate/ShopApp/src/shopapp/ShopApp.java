/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package shopapp;

import model.Computer;
import model.Laptop;
import model.Television;
import model.Watch;
import org.hibernate.Session;
import util.HibernateUtil;

/**
 *
 * @author ivantha
 */
public class ShopApp {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Session session = HibernateUtil.getSessionFactory().openSession();
        
        session.beginTransaction();
        
        Computer computer = new Computer();
        computer.setSerialNo("345jnh345");
        
        Laptop laptop = new Laptop();
        laptop.setSerialNo("sdfg8u43r");
        
        Television television = new Television();
        television.setSerialNo("dfg89u45mj");
        
        Watch watch = new Watch();
        watch.setSerialNo("45tjnjcsdc");
        
        session.save(computer);
        session.save(laptop);
        session.save(television);
        session.save(watch);
        
        session.getTransaction().commit();
    }
    
}
