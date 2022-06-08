package com.bright.wordle.model;
/**
 * Rappresenta il singolo tentativo caratterizzato da un array di celle
 * */
public class Tentativo {

	private Cella[] lettere;

	public Tentativo(Cella[] celle) {
		this.lettere = celle;
	}

	public Cella[] getLettere() {
		return lettere;
	}
	/**
	*    Dato un carattere verifica se nel tentativo è presente una cella 
	*    il cui colore è giallo e la lettera corrisponde al carattere passato
	*    @param lettera Carattere su cui effettuare la verifica
	*/
	public boolean contieneGiallo(char lettera) {

		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera && cella.getColore().equals("giallo")) {
				return true;
			}
		}
		return false;
	}
	/**
	*    Dato un carattere verifica se nel tentativo è presente una cella 
	*    il cui colore è verde e la lettera corrisponde al carattere passato
	*    @param lettera Carattere su cui effettuare la verifica
	*/
	public boolean contieneVerde(char lettera) {

		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera && cella.getColore().equals("verde")) {
				return true;
			}
		}
		return false;
	}
	/**
	* restituisce il numero di celle che hanno per colore giallo e per lettera il parametro lettera
	* @param lettera Carattere su cui effettuare il controllo
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
	/**
	* restituisce il numero di celle che presentato nella proprietà lettere il valore del parametro lettera
	* @param lettera Carattere su cui effettuare il controllo
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
	/**
	 * restituisce il numero di celle che hanno per colore grigio e per lettera il parametro lettera
	 * @param lettera Carattere su cui effettuare il controllo
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
