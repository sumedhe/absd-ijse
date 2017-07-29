/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package conn;

import conn.impl.PreferanceConnectionImpl;

/**
 *
 * @author ivantha
 */
public class ConnectionFactory {
    public static Connection getConnection(){
        return new PreferanceConnectionImpl();
    }
}
