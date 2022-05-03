package DAL;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

public class WordleDAO {
	private MiaConnessione miaConn = new MiaConnessione();
	private Statement stat;
	private ResultSet rs;
	private String query="select * from parole where word LIKE '%'";
	
	
	public List<String> find() throws SQLException {

		List<String> temp = new ArrayList<>();
		
		this.stat = miaConn.getConn().createStatement();
		this.rs = this.stat.executeQuery(query);
		
		while(this.rs.next()) {
			
			String r=rs.getString(1);
			
			temp.add(r);
			
		}
		
		return temp;
	}


	public void setQuery(char query) {
		this.query += "and word LIKE '%"+query+"%'";
	}
	
	public void initQuery() {
		this.query="select * from parole where word LIKE '%'";
	}
}
