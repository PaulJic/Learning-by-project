package ctrl;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import DAL.WordleDAO;
import model.StatusEnum;
import model.Tile;

public class GetWords {
	private List<Tile> tiles=new ArrayList<>();
	private WordleDAO db=new WordleDAO();
	public void setQuery() {
		tiles.forEach(x->{if(x.getState()==StatusEnum.CORRECT||x.getState()==StatusEnum.PRESENT) db.setQuery(x.getText());});
	}
	public List<String> findPresent(){
		try {
			return db.find();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	public List<Tile> getTiles() {
		return tiles;
	}
	public void setTiles(List<Tile> tiles) {
		this.tiles = tiles;
	}	
	public void initQuery() {
		db.initQuery();
	}
}
