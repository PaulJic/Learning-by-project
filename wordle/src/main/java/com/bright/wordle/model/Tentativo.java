package com.bright.wordle.model;

public class Tentativo {

	private Cella[] lettere;

	public Tentativo(Cella[] celle) {
		this.lettere = celle;
	}

	public Cella[] getLettere() {
		return lettere;
	}
	/*
	*    Verifica se nel Array lettere esiste una cella che ha per colore giallo e per lettera il paramatro lettera
	*/
	public boolean contieneGiallo(char lettera) {

		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera && cella.getColore().equals("giallo")) {
				return true;
			}
		}
		return false;
	}
	/*
	 *    Verifica se nel Array lettere esiste una cella che ha per colore verde e per lettera il paramatro lettera
	 */
	public boolean contieneVerde(char lettera) {

		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera && cella.getColore().equals("verde")) {
				return true;
			}
		}
		return false;
	}
	/*
	* restituisce il numero di celle che hanno per colore giallo e per lettera il parametro lettera
	*/
	public int contaGialloPerLettera(char lettera) {
		int contatore = 0;
		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera && cella.getColore().equals("giallo")) {
				contatore++;
			}
		}
		return contatore;
	}
	/*
	* restituisce il numero celle che presentato nella proprietà lettere il valore del parametro lettera
	* */
	public int contaPerLettera(char lettera) {
		int contatore = 0;
		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera) {
				contatore++;
			}
		}
		return contatore;
	}
	/*
	 * restituisce il numero di celle che hanno per colore grigio e per lettera il parametro lettera
	 */
	public int contaGrigioPerLettera(char lettera) {
		int contatore = 0;
		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera && cella.getColore().equals("grigio")) {
				contatore++;
			}
		}
		return contatore;
	}

}
