/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package config;

import modal.Customer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Description;

/**
 *
 * @author Ashan Tharuka
 */
public class BeanConfig {
    
    @Bean(name="customerBean")
    public Customer custObg() {
        return new Customer();
    }
    
}
