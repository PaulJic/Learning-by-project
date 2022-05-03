package test;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import ctrl.Advices;
import ctrl.GetWords;
import model.StatusEnum;
import model.Tile;

public class test {

	public static void main(String[] args) {
		GetWords get=new GetWords();
		Scanner sc=new Scanner(System.in);
		for(int i=0;i<6;i++) {
			List<Tile> t=new ArrayList<>();
			for(int j=0;j<5;j++)
			{
				System.out.println("insert letter number: "+(j+1));
				char c=sc.next().charAt(0);
				System.out.println("insert its status(CORRECT(1),PRESENT(2),WRONG(3)): ");
				int e=sc.nextInt();
				t.add(new Tile(c,StatusEnum.valueOf(e)));
			}
			get.setTiles(t);
			Advices ad=new Advices();
			ad.setWord(t);ad.setIndex(t);
			get.setQuery();
			List<String> filter=ad.filter(get.findPresent());
			filter.forEach(x-> System.out.println(x));
		}

	}

}
