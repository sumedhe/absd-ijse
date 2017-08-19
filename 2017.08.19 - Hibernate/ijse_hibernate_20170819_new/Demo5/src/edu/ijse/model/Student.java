/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.ijse.model;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.AUTO;
import javax.persistence.Id;
import javax.persistence.OneToMany;

/**
 *
 * @author namal
 */
@Entity
public class Student {
    
    
    private Integer studentId;
    private String studentName;
    
    private Set<Subject> subjects = new HashSet<>(0);

    @Id
    @GeneratedValue(strategy = AUTO)
    public Integer getStudentId() {
        return studentId;
    }

    public void setStudentId(Integer studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
    
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "student")
    public Set<Subject> getSubjects() {
        return subjects;
    }

    
    public void setSubjects(Set<Subject> subjects) {
        this.subjects = subjects;
    }
    
}
