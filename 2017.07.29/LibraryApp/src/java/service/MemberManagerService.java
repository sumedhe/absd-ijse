/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package service;

import dto.MemberDTO;

/**
 *
 * @author ivantha
 */
public interface MemberManagerService {
    boolean saveMember(MemberDTO memberDTO);
}
