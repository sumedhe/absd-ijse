/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test.tdd1.logic;

import tdd1.logic.Calculator;

/**
 *
 * @author Oshan
 */
public class CalculatorTest {
    private void testMaxValue() throws AssertionError{
        Calculator calculator = new Calculator();
        int result = calculator.calculate(1000);
        if (result != 10000){
            throw new AssertionError("Assertion error\nValue expected : " + 1000 * 10 + "\nResult value : " + result);
        }else{
            System.out.println("Max value successfullty tested.");
        }
    }
    
    private void testMinValue() throws AssertionError{
        Calculator calculator = new Calculator();
        int result = calculator.calculate(-1000);
        if (result != -10000){
            throw new AssertionError("Assertion error\nValue expected : " + (-1000) * 10 + "\nResult value : " + result);
        }else{
            System.out.println("Min value successfullty tested.");
        }
    }
    
    public static void main(String args[]){
        CalculatorTest calculatorTest = new CalculatorTest();
        calculatorTest.testMaxValue();
        calculatorTest.testMinValue();
    }
    
}
