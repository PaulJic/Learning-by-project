package model;

import java.util.ArrayList;
import java.util.List;

public class CalcoloCondizioni {

	public static List<String> calcola(Tentativo tentativo) {
		
		List<String> lista = new ArrayList<>();
		
		if(!CalcoloCondizioni.condizioneVerdi(tentativo).isEmpty()) {
			lista.add(CalcoloCondizioni.condizioneVerdi(tentativo));
		}
		
		lista.addAll(CalcoloCondizioni.condizioneGialli(tentativo));
		lista.addAll(CalcoloCondizioni.condizioneGrigi(tentativo));
		lista.addAll(CalcoloCondizioni.condizioneOccorrenzeGialli(tentativo));
		
		return lista;
	}
	
	public static void stampaCondizioni(Tentativo tentativo) {
		System.out.println(CalcoloCondizioni.condizioneVerdi(tentativo));
	
		System.out.println(CalcoloCondizioni.condizioneGialli(tentativo));
	
		for (String s : CalcoloCondizioni.condizioneGrigi(tentativo)) {
			System.out.println(s);
		}
	
		for (String s : CalcoloCondizioni.condizioneOccorrenzeGialli(tentativo)) {
			System.out.println(s);
		}
	}

	public static String condizioneVerdi(Tentativo tentativo) {
	
		String condizione = "";
		// per ogni lettera, di tipo Cella che è contenuto in tentativo.lettere (array
		// di tipo Cella)
		for (Cella lettera : tentativo.getLettere()) {
			if (lettera.getColore() == Colore.VERDE) {
				condizione += lettera.getLettera();
			} else {
				condizione += "_";
			}
		}
	
		if (condizione.equals("_____")) {
			return "";
		}
	
		return "word LIKE '" + condizione + "'";
	}

	public static List<String> condizioneGialli(Tentativo tentativo) {
	
		List<String> condizioni = new ArrayList<>();
		
		// per ogni lettera, di tipo Cella che è contenuto in tentativo.lettere (array
		// di tipo Cella)
		for (int i = 0; i < tentativo.getLettere().length; i++) {
			Cella lettera = tentativo.getLettere()[i];
			if (lettera.getColore() == Colore.GIALLO) {
				condizioni.add("word NOT LIKE '" + rimpiazzaCarattere("_____", i, lettera.getLettera()) + "'"); 
			} 
		}
	
		return condizioni;
	}

	public static List<String> condizioneOccorrenzeGialli(Tentativo tentativo) {
	
		List<String> lista = new ArrayList<>();
		for (Cella cella : tentativo.getLettere()) {
			if (cella.getColore() == Colore.GIALLO) {
				if (tentativo.contaPerLettera(cella.getLettera()) > 1) {
					if (tentativo.contaGrigioPerLettera(cella.getLettera()) > 0) {
						lista.add("(LENGTH(word) - LENGTH(REPLACE(word, '" + cella.getLettera() + "', ''))) = "
								+ tentativo.contaGialloPerLettera(cella.getLettera()));
					} else {
						lista.add("(LENGTH(word) - LENGTH(REPLACE(word, '" + cella.getLettera() + "', ''))) >= "
								+ tentativo.contaGialloPerLettera(cella.getLettera()));
					}
	
				} else {
					lista.add("word LIKE '%" + cella.getLettera() + "%'");
				}
			}
	
		}
	
		return lista;
	
	}

	public static List<String> condizioneGrigi(Tentativo tentativo) {
	
		List<String> lista = new ArrayList<>();
		for (Cella cella : tentativo.getLettere()) {
			if (cella.getColore() == Colore.GRIGIO && !tentativo.contieneGiallo(cella.getLettera())
					&& !tentativo.contieneVerde(cella.getLettera())) {
				lista.add("word NOT LIKE '%" + cella.getLettera() + "%'");
			}
		}
		return lista;
	}
	
	private static String rimpiazzaCarattere(String base, int posizione, char carattere) {
		
		char[] caratteri = base.toCharArray();
		caratteri[posizione] = carattere;
		return String.valueOf(caratteri);
	}
	
}
