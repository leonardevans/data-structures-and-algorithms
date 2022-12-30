package com.bedubytes;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/*
Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments

The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum

If there is a tie for the shortest combination, you may return any one of the shortest

Example 1
bestSum(7, [5, 3, 4, 7])
[3, 4] , [7]
returns [7]

Example 2
bestSum(8, [2, 3, 5])
[2, 2, 2, 2] , [2, 3, 3] , [3, 5]
returns [3, 5]
*/
public class BestSum {
    // brute force algorithm
    public static List<Integer> bestSum(int targetSum, List<Integer> numbers){
        if (targetSum == 0) return new ArrayList<>();

        if(targetSum < 0) return null;

        List<Integer> shortestCombination = null;

        for (int num: numbers) {
            final int remainder = targetSum -num;
            final List<Integer> remainderCombination = bestSum(remainder, numbers);

            if(remainderCombination != null){
                final List<Integer> combination = new ArrayList<>(remainderCombination);
                combination.add(num);

                if (shortestCombination == null || combination.size() < shortestCombination.size()) shortestCombination = combination;
            }
        }

        return shortestCombination;
    }

// memoized algorithm
    public static List<Integer> bestSumMemo(int targetSum, List<Integer> numbers, Map<Integer, List<Integer>> memo){
        if (memo.containsKey(targetSum)) return memo.get(targetSum);

        if (targetSum == 0) return new ArrayList<>();

        if(targetSum < 0) return null;

        List<Integer> shortestCombination = null;

        for (int num: numbers) {
            final int remainder = targetSum -num;
            final List<Integer> remainderCombination = bestSumMemo(remainder, numbers, memo);

            if(remainderCombination != null){
                final List<Integer> combination = new ArrayList<>(remainderCombination);
                combination.add(num);

                if (shortestCombination == null || combination.size() < shortestCombination.size()) shortestCombination = combination;
            }
        }

        memo.put(targetSum, shortestCombination);

        return memo.get(targetSum);
    }
}
