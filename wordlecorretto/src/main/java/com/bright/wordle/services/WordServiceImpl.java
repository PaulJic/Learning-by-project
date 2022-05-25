package com.bright.wordle.services;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.bright.wordle.entities.Word;
import com.bright.wordle.model.Tentativo;
import com.bright.wordle.repos.WordDAOJDBC;

@Service
public class WordServiceImpl implements WordService {
	public static List<String> condizioni = new ArrayList<>();
	public static List<Tentativo> tentativi = new ArrayList<>();
	private WordDAOJDBC jdbc = new WordDAOJDBC();

	@Override
	public List<Word> findWordss() {
		try {
			return jdbc.findAll();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;
	}

}
