package com.bedubytes;

import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
	// write your code here
        String[] wordBank = new String[]{"purp", "p", "ur", "le", "purpl"};
        int[] numbers = new int[]{2, 3};

        System.out.println(CanSum.canSumMemo(7, numbers, new HashMap<>()));
    }
}
