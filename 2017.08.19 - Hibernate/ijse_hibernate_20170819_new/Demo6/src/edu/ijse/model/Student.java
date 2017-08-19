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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

/**
 *
 * @author namal
 */
@Entity
public class Student {
    
    
    private Integer studentId;
    private String studentName;

    private Set<Teacher> teachers = new HashSet<>(0);
    
    
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

    @ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "student_teacher", joinColumns = {
			@JoinColumn(name = "student_id", nullable = false, updatable = false) },
			inverseJoinColumns = { @JoinColumn(name = "teacher_id",
					nullable = false, updatable = false) })
    public Set<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(Set<Teacher> teachers) {
        this.teachers = teachers;
    }
    
    
    
    
}
