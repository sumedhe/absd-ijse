/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package conn.impl;

import conn.Connection;
import java.util.prefs.Preferences;

/**
 *
 * @author ivantha
 */
public class PreferanceConnectionImpl implements Connection{

    @Override
    public Object getConnection() {
        Preferences pref = Preferences.userNodeForPackage(this.getClass());
        return pref;
    }
    
}
