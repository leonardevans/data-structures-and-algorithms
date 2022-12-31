package com.bedubytes;

import java.util.Map;

/*
Write a function `canSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments

The function should return a boolean indicating whether it is possible to generate the targetSum using numbers from the array

You may use an element of the array as many times as needed

You may assume that all input numbers are non-negative

Example 1
canSum(7, [5, 3, 4, 7]) returns true
3+4 = 7
7 = 7

Example 2
canSum(7, [2, 4]) returns false

*/
public class CanSum {
    // brute force algorithm
    public  static boolean canSum(int targetSum, int[] numbers){
        if (targetSum == 0) return true;

        if (targetSum < 0) return false;

        for (int num: numbers) {
            int remainder = targetSum - num;
            if (canSum(remainder, numbers)) return true;
        }

        return false;
    }

    // memoized algorithm
    public  static boolean canSumMemo(int targetSum, int[] numbers, Map<Integer, Boolean> memo){
        if (memo.containsKey(targetSum)) return memo.get(targetSum);

        if (targetSum == 0) return true;

        if (targetSum < 0) return false;

        for (int num: numbers) {
            int remainder = targetSum - num;
            if (canSum(remainder, numbers)) {
                memo.put(targetSum, true);
                return true;
            }
        }

        memo.put(targetSum, false);
        return false;
    }
}
