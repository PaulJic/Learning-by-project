package DAL;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class DatabaseParole {

	public static List<String> trovaParole(List<String> condizioni) {
		
		String queryParole = creaQuery(condizioni);
		
		System.out.println(queryParole);
		
		String connectionUrl = "jdbc:mysql://localhost:3306/parole";
		
		List<String> listaSuggerimenti = new ArrayList<>();

		try {
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
			Connection conn = DriverManager.getConnection(connectionUrl, "root", "root");
			PreparedStatement ps = conn.prepareStatement(queryParole);
			ResultSet rs = ps.executeQuery();
			
			while (rs.next()) {
				
				listaSuggerimenti.add(rs.getString("word"));
			}

		} catch (SQLException e) {
			e.printStackTrace();
		}

		return listaSuggerimenti;
		
	}
	
	public static String creaQuery(List<String> condizioni) {
		return "SELECT word FROM parole WHERE " + String.join(" AND ", condizioni);
	}
	
	
}
