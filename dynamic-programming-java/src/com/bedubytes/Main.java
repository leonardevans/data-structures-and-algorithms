package com.bedubytes;

import java.util.HashMap;

public class Main {

    public static void main(String[] args) {
	// write your code here
        String[] wordBank = new String[]{"purp", "p", "ur", "le", "purpl"};

        System.out.println(CanConstruct.canConstructMemo("purple", wordBank, new HashMap<>()));
    }
}
