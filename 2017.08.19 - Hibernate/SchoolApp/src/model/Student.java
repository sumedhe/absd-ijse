/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package model;

import java.util.HashSet;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.AUTO;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

/**
 *
 * @author ivantha
 */

@Entity
public class Student {
    private Integer studentId;
    private String studentName;
    private Bag bag;
    private Set<Subject> subjects = new HashSet<>();

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

    @OneToOne(cascade = CascadeType.ALL)
    public Bag getBag() {
        return bag;
    }

    public void setBag(Bag bag) {
        this.bag = bag;
    }

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "student_subject", joinColumns = {
        @JoinColumn(name = "student_id", nullable = false, updatable = false)}, 
            inverseJoinColumns = {@JoinColumn(name = "subject_id", nullable = false, updatable = false)})
    public Set<Subject> getSubjects() {
        return subjects;
    }

    public void setSubjects(Set<Subject> subjects) {
        this.subjects = subjects;
    }
}
