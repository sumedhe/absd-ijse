/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao.impl;

import conn.Connection;
import conn.ConnectionFactory;
import dao.MemberDAO;
import java.util.prefs.Preferences;
import model.Member;

/**
 *
 * @author ivantha
 */
public class MemberDAOImpl implements MemberDAO{

    @Override
    public int saveMember(Member member) {
        Connection connection = ConnectionFactory.getConnection();
        Preferences preferences = (Preferences) connection.getConnection();
        String memList = preferences.get("mem", "");
        memList += member.toString();
        preferences.put("mem", memList);
        return 1;
    }
    
}
