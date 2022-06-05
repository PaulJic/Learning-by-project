package com.bright.wordle.repos;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.bright.wordle.entities.Word;
import com.bright.wordle.services.WordServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;


public class WordDAOJDBC {

	private MiaConnessione miaConn = new MiaConnessione();

	private Statement stat;
	private ResultSet rs;
	private String query = "Select word from parole where ";

	public List<Word> findAll(String s) throws SQLException {

		List<Word> temp = new ArrayList<>();
		stat = miaConn.getConn().createStatement();
		rs = stat.executeQuery(query+s + " order by value DESC");
		while (rs.next()) {
			Word r = new Word();
			r.setWord(rs.getString(1));

			temp.add(r);
		}
		return temp;
	}

}
