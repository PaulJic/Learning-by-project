package com.jic.wordle.repos;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.jic.wordle.entities.Word;
import com.jic.wordle.services.WordServiceImpl;


public class WordDAOJDBC {
	
	private MiaConnessione miaConn = new MiaConnessione();
	
	private Statement stat;
	private ResultSet rs;
	private String query="Select word from parole where ";
	
	public List<Word> findAll() throws SQLException {

		List<Word> temp= new ArrayList<>();
		this.stat =miaConn.getConn().createStatement();
		this.rs=this.stat.executeQuery(query + String.join(" AND ", WordServiceImpl.condizioni)+ " order by value");
		while(this.rs.next()) {
			Word r= new Word();
			r.setWord(rs.getString(1));
			
			temp.add(r);
		}
		
		return temp;
	}

}
