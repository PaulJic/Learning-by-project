package com.bright.wordle.services;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Service;

import com.bright.wordle.entities.Word;
import com.bright.wordle.repos.WordDAOJDBC;

@Service
public class WordServiceImpl implements WordService {
	private WordDAOJDBC jdbc= new WordDAOJDBC();

	@Override
	public List<Word> findWordss(String s) {
		try {
			return jdbc.findAll(s);
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

}
