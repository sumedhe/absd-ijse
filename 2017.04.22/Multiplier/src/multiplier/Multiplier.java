/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package multiplier;

import java.util.Scanner;

/**
 *
 * @author Oshan
 */
public class Multiplier {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // Create scanner
        Scanner scanner = new Scanner(System.in);
        System.out.print("Please enter a number between -1000 and 1000 : ");
        try {
            // Get user input
            int n = scanner.nextInt();
            // Check whether the input number is between -1000 and 1000 or not
            if (n > 1000 && n < -1000) {
                System.out.println("Incorrect number format. The number should be between -1000 and 1000");
            } else {
                System.out.format(String.valueOf(n) + "multiplied by 10 is %d", n * 10);
                System.out.println("");
            }
        } catch (Exception ex) {
            // Show error
            System.out.println("Incorrect number format");
        }
    }
}
