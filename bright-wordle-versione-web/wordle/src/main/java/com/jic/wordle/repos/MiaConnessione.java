package com.jic.wordle.repos;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class MiaConnessione {
	
	private final String HOST = "jdbc:mysql://54.217.215.74:3306/sql4494488";
	private final String USER = "sql4494488";
	private final String PASS = "rfKTrMwh3x";
	
	private Connection conn;
	
	private void connetti() {
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
		
		try {
			this.conn = DriverManager.getConnection(HOST, USER, PASS);
		} catch (SQLException e) {
			
			System.err.println("Errore di connessione " + e.getMessage());
			//e.printStackTrace();
		}
	}
	public Connection getConn() {
		if(this.conn==null) {
			connetti();
		}
		return conn;
	}
	
}
