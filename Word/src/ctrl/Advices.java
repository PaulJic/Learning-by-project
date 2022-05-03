package ctrl;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

import model.StatusEnum;
import model.Tile;

public class Advices{
	//GetWords get=new GetWords();
	private String parola;
	public void setWord(List<Tile> tiles) {
		String word_="";
		for (Tile tile : tiles) {
			word_+=tile.getText();
		}
		parola=word_;
	}
	private static List<Character> indexAssenti=new ArrayList<>();
	private List<Integer> index=new ArrayList<>();
	public void setIndex(List<Tile> tiles) {
		for (int i=0;i< tiles.size();i++) {
			if(tiles.get(i).getState()==StatusEnum.CORRECT)
				index.add(i);
			else if(tiles.get(i).getState()==StatusEnum.WRONG)
				indexAssenti.add(tiles.get(i).getText());
		}
			
	}
	public List<String> filter(List<String> word){
		List<String> filtered=new ArrayList<>();
		if(index.size()>0) {
			for (String s : word) {
				for (Integer ind : index) {
					if(parola.charAt(ind)==s.charAt(ind))
						filtered.add(s);
				}
			}
		}
		else
			filtered=word;
		return filtered.stream().filter(x-> !Pattern.compile("["+indexAssenti.toString()+"]").matcher(x).find()).toList();
	}
}
	
