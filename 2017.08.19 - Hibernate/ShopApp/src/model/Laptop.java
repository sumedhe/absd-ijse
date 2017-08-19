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

/**
 *
 * @author ivantha
 */

@Entity
public class Laptop {
    private Integer id;
    private String serialNo;
    private Double price;
    private Integer warrenty; 

    @Id
    @GeneratedValue(strategy = AUTO)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSerialNo() {
        return serialNo;
    }

    public void setSerialNo(String serialNo) {
        this.serialNo = serialNo;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getWarrenty() {
        return warrenty;
    }

    public void setWarrenty(Integer warrenty) {
        this.warrenty = warrenty;
    }
}
