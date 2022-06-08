package com.bright.wordle.model;
/**
 * Rappresenta la singola cella caratterizzata dal valore della lettera 
 * e dal suo colore
 * */
public class Cella {

	private char lettera;
	private String colore;

	public Cella(char lettera, String colore) {
		this.lettera = lettera;
		this.colore = colore;
	}

	public String getColore() {
		return colore;
	}

	public char getLettera() {
		return lettera;
	}

	public void setLettera(char lettera) {
		this.lettera = Character.toLowerCase(lettera);
	}

	
}
