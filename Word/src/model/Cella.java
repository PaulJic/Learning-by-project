package model;

public class Cella {

	private char lettera;
	private Colore colore;
	
	public Cella (char lettera, Colore colore) {
		this.lettera = lettera;
		this.colore = colore;
	}

	public Colore getColore() {
		return colore;
	}

	public char getLettera() {
		return lettera;
	}
	
	
	
}
