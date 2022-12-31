package com.bedubytes;

import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
	// write your code here
        String word = "purple";
        String[] wordBank = new String[]{"ab", "abc", "cd", "def", "abcd"};

        String word1 = "abcdef";
        String[] wordBank1 = new String[]{"purp", "p", "ur", "le", "purpl"};

        String word2 = "skateboard";
        String[] wordBank2 = new String[]{"bo", "rd", "ate", "t", "ska", "sk", "boar"};

        String word3 = "enterapotentpot";
        String[] wordBank3 = new String[]{"a", "p", "ent", "enter", "ot", "o", "t"};

        String word4 = "eeeeeeeeeeeeeeeeeeeeeef";
        String[] wordBank4 = new String[]{"e", "ee", "eee", "eeee", "eeeee", "eeeeee"};

        int number = 7;
        int[] numbers = new int[]{2, 3};

        int number1 = 7;
        int[] numbers1 = new int[]{5, 3, 4, 7};

        int number2 = 8;
        int[] numbers2 = new int[]{2, 3, 5};

        int number3 = 8;
        int[] numbers3 = new int[]{1, 4, 5};

        int number4 = 100;
        int[] numbers4 = new int[]{1, 2, 5, 25};

//        System.out.println(CountConstruct.countConstructMemo(word3, wordBank3, new HashMap<>()));

        System.out.println(Fibonacci.fibonacciMemo(20, new HashMap<>()));
    }
}
