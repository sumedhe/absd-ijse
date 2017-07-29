/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import model.Member;

/**
 *
 * @author ivantha
 */
public class DAOFactory {
    public static MemberDAO getMemberDAO(){
        return new MemberDAO() {
            @Override
            public int saveMember(Member member) {
                throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
            }
        };
    }
}
