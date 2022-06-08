package com.bright.wordle.repos;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.bright.wordle.entities.Word;


public class WordDAOJDBC {

	private MiaConnessione miaConn = new MiaConnessione();

	private Statement stat;
	private ResultSet rs;
	private String query = "Select word from parole where ";
	/**
	 * Interroga il db attraverso l'utilizzo della propietà query concatenata ad una stringa che gli viene passata
	 * per parametro. Tale stringa deve avere una sintassi SQL valida
	 * @param s Stringa, scritta tramite la sintassi SQL, contenente i valori della clusola where alla colonna word del db
	 * */
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
