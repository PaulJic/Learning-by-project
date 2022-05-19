package com.jic.wordle.services;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jic.wordle.entities.Word;
import com.jic.wordle.model.Tentativo;
import com.jic.wordle.repos.WordDAO;
import com.jic.wordle.repos.WordDAOJDBC;
import com.jic.wordle.model.CalcoloCondizioni;
@Service
public class WordServiceImpl implements WordService {
	public static List<String> condizioni=new ArrayList<>();
	public static List<Tentativo> tentativi=new ArrayList<>();
	private WordDAOJDBC jdbc= new WordDAOJDBC();
	@Autowired
	private WordDAO repo;
	@Override
	public List<Word> findWords(String s) {
//		for (Tentativo tentativo : tentativi)
//			condizioni.addAll(CalcoloCondizioni.calcola(tentativo));
		return repo.findWordLike(s);
	}
	@Override
	public List<Word> findWordss() {
		
		try {
			return jdbc.findAll();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
