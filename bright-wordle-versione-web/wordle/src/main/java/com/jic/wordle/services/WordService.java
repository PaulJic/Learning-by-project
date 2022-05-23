package com.jic.wordle.services;

import java.util.List;

import com.jic.wordle.entities.Word;

public interface WordService {
	List<Word> findWords(String s);
	List<Word> findWordss();
//	public static List<String> condizioni=new ArrayList<String>();
//	public static List<Tentativo> tentativi=new ArrayList<>();
}
