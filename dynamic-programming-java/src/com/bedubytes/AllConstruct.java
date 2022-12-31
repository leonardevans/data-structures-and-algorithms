package com.bedubytes;

import java.util.ArrayList;
import java.util.List;

/*
Write a function `allConstruct(target, wordBank)` that accepts a target string and an array of strings

The function should return a 2D array containing all the ways that the `target` can be constructed by concatenating elements of the `wordBank` array. Each element of the 2D array should represent one combination that constructs the `target`

You may reuse elements of `wordBank` as many times as needed
*/
public class AllConstruct {
    // brute force algorithm
    public static List<List<String>> allConstruct(String target, String[] wordBank){
        if (target.equals("")) {
            List<List<String>> nothing = new ArrayList<>();
            List<String>   nothi = new ArrayList<>();
            nothing.add(nothi);
            System.out.println("nothing " + nothing);
            return  nothing;
        }

        final List<List<String>> result = new ArrayList<>();

        for (String word: wordBank) {
            if (target.indexOf(word) == 0){
                final String suffix = target.substring(word.length());
                final List<List<String>> suffixWays = allConstruct(suffix, wordBank);
                suffixWays.stream().map(oneWay -> oneWay.add(word));
                final List<List<String>> targetWays = suffixWays;
                result.addAll(targetWays);
            }
        }

        return result;
    }
}
