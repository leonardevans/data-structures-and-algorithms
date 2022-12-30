package com.bedubytes;

/*
Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings

The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array

You may reuse elements of `wordBank` as many times as needed

Example 1
canConstruct(abcdef, [ab, abc, cd, def, abcd])
abc + def = abcdef hence it returns true

Example 2
canConstruct(skateboard, [bo, rd, ate, t, ska, sk, boar])
returns false

Example 3
canConstruct('', [cat, dog, mouse])
returns true
*/

import java.util.List;
import java.util.Map;

// brute force algorithm
public class CanConstruct {
    public static boolean canConstruct(String target, String[] wordBank){
        if (target.equals("")) return true;

        for (String word: wordBank) {
            if (target.indexOf(word) == 0){
                String suffix = target.substring(word.length());
                if (canConstruct(suffix, wordBank)) return true;
            }
        }
        return false;
    }

    public static boolean canConstructMemo(String target, String[] wordBank, Map<String, Boolean> memo){
        if (memo.containsKey(target)) return memo.get(target);

        if (target.equals("")) return true;

        for (String word: wordBank) {
            if (target.indexOf(word) == 0){
                String suffix = target.substring(word.length());
                if (canConstruct(suffix, wordBank)) {
                    memo.put(target, true);
                    return memo.get(target);
                };
            }
        }

        memo.put(target, false);
        return memo.get(target);
    }
}
