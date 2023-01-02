package com.bedubytes;

/*
Write a function `howSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments

The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null

If there are multiple combinations possible, you may return any single one
*/

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class HowSum {
    // brute force algorithm
    public static List<Integer> howSum(int targetSum, int[] numbers) {
        if(targetSum == 0) return new ArrayList<Integer>();

        if (targetSum < 0) return null;

        for (int num: numbers) {
            int remainder = targetSum-num;
            List<Integer> remainderNumbers = howSum(remainder, numbers);
            if (remainderNumbers != null){
                remainderNumbers.add(num);
                return remainderNumbers;
            }
        }
        return null;
    }
    // Time: O((n^m)*m), Space: O(m) where m = targetSum and n = length of the array

    // memoized algorithm
    public static List<Integer> howSumMemo(int targetSum, int[] numbers, Map<Integer, List<Integer>> memo) {
        if (memo.containsKey(targetSum)) return memo.get(targetSum);

        if(targetSum == 0) return new ArrayList<Integer>();

        if (targetSum < 0) return null;

        for (int num: numbers) {
            int remainder = targetSum-num;
            List<Integer> remainderNumbers = howSum(remainder, numbers);
            if (remainderNumbers != null){
                remainderNumbers.add(num);
                memo.put(targetSum, remainderNumbers);
                return remainderNumbers;
            }
        }

        memo.put(targetSum, null);
        return null;
    }
    // Time: O((n*m^2), Space: O(m^2) where m = targetSum and n = length of the array
}
