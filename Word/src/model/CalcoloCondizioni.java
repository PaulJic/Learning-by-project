package model;

import java.util.ArrayList;
import java.util.List;

public class CalcoloCondizioni {

	public static List<String> calcola(Tentativo tentativo) {
		
		List<String> lista = new ArrayList<>();
		
		if(!CalcoloCondizioni.condizioneVerdi(tentativo).isEmpty()) {
			lista.add(CalcoloCondizioni.condizioneVerdi(tentativo));
		}
		if(!CalcoloCondizioni.condizioneGialli(tentativo).isEmpty()) {
			lista.add(CalcoloCondizioni.condizioneGialli(tentativo));
		}
		
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

	public static String condizioneGialli(Tentativo tentativo) {
	
		String condizione = "";
		// per ogni lettera, di tipo Cella che è contenuto in tentativo.lettere (array
		// di tipo Cella)
		for (Cella lettera : tentativo.getLettere()) {
			if (lettera.getColore() == Colore.GIALLO) {
				condizione += lettera.getLettera();
			} else {
				condizione += "_";
			}
		}
	
		if (condizione.equals("_____")) {
			return "";
		}
	
		return "word NOT LIKE '" + condizione + "'";
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
	
}
