package model;

public class Tentativo {
	
	private Cella[] lettere;
			
	public Tentativo (Cella[] celle) {
		this.lettere = celle;
	}

	public Cella[] getLettere() {
		return lettere;
	}
	
	public boolean contieneGiallo(char lettera) {
		
		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera && cella.getColore() == Colore.GIALLO) {
				return true;
			}
		}
		return false;
	}
	
	public boolean contieneVerde(char lettera) {
		
		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera && cella.getColore() == Colore.VERDE) {
				return true;
			}
		}
		return false;
	}
	
	public int contaGialloPerLettera(char lettera) {
		int contatore = 0;
		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera && cella.getColore() == Colore.GIALLO) {
				contatore ++;
			}
		}
		return contatore;
	}
	
	public int contaPerLettera(char lettera) {
		int contatore = 0;
		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera) {
				contatore ++;
			}
		}
		return contatore;
	}

	public int contaGrigioPerLettera(char lettera) {
		int contatore = 0;
		for (Cella cella : this.getLettere()) {
			if (cella.getLettera() == lettera && cella.getColore() == Colore.GRIGIO) {
				contatore ++;
			}
		}
		return contatore;
	}
	
	
}
