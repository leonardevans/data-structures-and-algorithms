package com.bedubytes;

import java.util.Map;

/*
    Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right

    In how many ways can you travel to the goal on a grid with dimensions m*n

    Write a function `gridTraveler(m, n)` that calculates this
*/
public class GridTraveler {
    //brute force algorithm
    public static int gridTraveler(int m, int n){
        if(m==1 && n==1 ) return 1;
        if(m==0 || n==0 ) return 0;
        return gridTraveler(m-1, n) + gridTraveler(m, n-1);
    }// Time: O( 2^(n+m) ), Space: O(n+m)

    //memoized algorithm
    public static int gridTravelerMemo(int m, int n, Map<String, Integer> memo){
        String key = m+","+n;
        if (memo.containsKey(key)) return memo.get(key);
        if(m==1 && n==1 ) return 1;
        if(m==0 || n==0 ) return 0;

        int ways = gridTraveler(m-1, n) + gridTraveler(m, n-1);

        //add this to our memo
        memo.put(key, ways);

        // since the result of (2,1) is the same as (1, 2), we add another key of the interchanged n and m
        memo.put(n+","+m, ways);

        return ways;
    }// Time: O(n*m), Space: O(n+m)
}
