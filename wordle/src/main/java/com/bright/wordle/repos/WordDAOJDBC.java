package com.bright.wordle.repos;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.bright.wordle.entities.Word;
import com.bright.wordle.services.WordServiceImpl;

public class WordDAOJDBC {

	private MiaConnessione miaConn = new MiaConnessione();

	private Statement stat;
	private ResultSet rs;
	private String query = "Select word from parole where ";

	public List<Word> findAll() throws SQLException {

		List<Word> temp = new ArrayList<>();
		stat = miaConn.getConn().createStatement();
		rs = stat.executeQuery(query + String.join(" AND ", WordServiceImpl.condizioni) + " order by value DESC");
		while (rs.next()) {
			Word r = new Word();
			r.setWord(rs.getString(1));

			temp.add(r);
		}
//		try {rs.close();} catch(Exception e) {e.printStackTrace();}
//		try {stat.close();} catch(Exception e) {e.printStackTrace();}
//		try {c.close();} catch(Exception e) {e.printStackTrace();}
		return temp;
	}

}
