package com.bedubytes;

/*
Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings

The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array

You may reuse elements of `wordBank` as many times as needed

Example
canConstruct(purple, [purp, p, ur, le, purpl])
returns 2
*/

import java.util.Map;

public class CountConstruct {
    // brute force algorithm
    public static int countConstruct(String target, String[] wordBank){
        if (target.equals("")) return 1;

        int totalCount = 0;

        for (String word: wordBank) {
            if (target.indexOf(word) ==0){
                String remainingPart = target.substring(word.length());
                totalCount += countConstruct(remainingPart, wordBank);
            }
        }

        return totalCount;
    }

    // memoized algorithm
    public static int countConstructMemo(String target, String[] wordBank, Map<String, Integer> memo){
        if (memo.containsKey(target)) return memo.get(target);

        if (target.equals("")) return 1;

        int totalCount = 0;

        for (String word: wordBank) {
            if (target.indexOf(word) ==0){
                String remainingPart = target.substring(word.length());
                totalCount += countConstruct(remainingPart, wordBank);
            }
        }

        memo.put(target, totalCount);
        return totalCount;
    }
}
