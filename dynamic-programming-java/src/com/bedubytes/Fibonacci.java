package com.bedubytes;

import java.util.Map;

public class Fibonacci {
    public static int fibonacci(int n){
        if (n <=0 ) return 0;
        if (n <=2 ) return 1;

        return fibonacci(n-1) + fibonacci(n-2);
    }

    public static int fibonacciMemo(int n, Map<Integer, Integer> memo){
        if (memo.containsKey(n)) return memo.get(n);

        if (n <=0 ) return 0;
        if (n <=2 ) return 1;

        int nMemo = fibonacciMemo(n-1, memo) + fibonacciMemo(n-2, memo);
        memo.put(n, nMemo);
        return nMemo;
    }
}
