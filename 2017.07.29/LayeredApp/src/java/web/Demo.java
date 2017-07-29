/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package web;

/**
 *
 * @author ivantha
 */
public class Demo {
    public static void main(String args[]){
        Saver s = SaverFactory.getSaver();
        System.out.println(s.getCurrent());
    }
}
