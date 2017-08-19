/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.AUTO;
import javax.persistence.Id;
import javax.persistence.OneToOne;

/**
 *
 * @author ivantha
 */

@Entity
public class Bag {
    private Integer bagId;
    private String bagColor;
    private Student student;

    @Id
    @GeneratedValue(strategy = AUTO)
    public Integer getBagId() {
        return bagId;
    }

    public void setBagId(Integer bagId) {
        this.bagId = bagId;
    }

    public String getBagColor() {
        return bagColor;
    }

    public void setBagColor(String bagColor) {
        this.bagColor = bagColor;
    }

    @OneToOne(mappedBy = "bag")
    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
    
    
    
}
