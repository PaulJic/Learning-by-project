package com.bright.wordle.model;

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

}
