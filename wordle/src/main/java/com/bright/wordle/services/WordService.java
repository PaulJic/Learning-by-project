package com.bright.wordle.services;

import java.util.List;

import com.bright.wordle.entities.Word;

public interface WordService {
	List<Word> findWordss(String s);
}
