package com.bright.wordle.model;

import java.util.ArrayList;
import java.util.List;


public class CalcoloCondizioni {

	public static List<String> calcola(Tentativo tentativo) {

		List<String> lista = new ArrayList<>();

		if (!CalcoloCondizioni.condizioneVerdi(tentativo).isEmpty()) {
			lista.add(CalcoloCondizioni.condizioneVerdi(tentativo));
		}
		if (!CalcoloCondizioni.condizioneGialli(tentativo).isEmpty()) {
			lista.addAll(CalcoloCondizioni.condizioneGialli(tentativo));

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
		// per ogni lettera, di tipo Cella che � contenuto in tentativo.lettere (array
		// di tipo Cella)
		for (Cella lettera : tentativo.getLettere()) {
			if (lettera.getColore().equals("verde")) {
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
		List<String> lista= new ArrayList<>();
		//String condizione = "";
		// per ogni lettera, di tipo Cella che � contenuto in tentativo.lettere (array
		// di tipo Cella)
		for(int j=0;j<5;j++) {
			if(tentativo.getLettere()[j].getColore().equals("giallo")) {
				String condizion="_____";
				String condizioni=condizion.substring(0,j)+tentativo.getLettere()[j].getLettera()+condizion.substring(j+1);
				lista.add("word not like "+ "'"+condizioni+"'");   //+((j<4)?" and ":""*/
				
			}
		}
		return lista;
//		for (Cella lettera : tentativo.getLettere()) {
//			if (lettera.getColore().equals("giallo")) {
//			
//			} else {
//				condizione += "_";
//			}
//		}
//
//		if (condizione.equals("_____")) {
//			return "";
//		}
//
//		return "word NOT LIKE '" + condizione + "'";
	}

	public static List<String> condizioneOccorrenzeGialli(Tentativo tentativo) {

		List<String> lista = new ArrayList<>();
		for (Cella cella : tentativo.getLettere()) {
			if (cella.getColore().equals("giallo")) {
				if (tentativo.contaPerLettera(cella.getLettera()) > 1) {
					if (tentativo.contaGrigioPerLettera(cella.getLettera()) > 0) {
						lista.add("(LENGTH(word) - LENGTH(REPLACE(word, '" + cella.getLettera() + "', ''))) = "+ tentativo.contaGialloPerLettera(cella.getLettera()));
								
					} else {
						lista.add("(LENGTH(word) - LENGTH(REPLACE(word, '" + cella.getLettera() + "', ''))) >= "+ tentativo.contaGialloPerLettera(cella.getLettera()));
								
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
			if (cella.getColore().equals("grigio") && !tentativo.contieneGiallo(cella.getLettera())
				/*&& !tentativo.contieneVerde(cella.getLettera())*/) {
				if(tentativo.contieneVerde(cella.getLettera())) {
					for(int j=0;j<5;j++) {
						if(!tentativo.getLettere()[j].getColore().equals("verde")) {
							String condizion="_____";
							String condizioni=condizion.substring(0,j)+cella.getLettera()+condizion.substring(j+1);
							lista.add("word not like "+ "'"+condizioni+"'");
						}
							
				}}
				else
					lista.add("word NOT LIKE '%" + cella.getLettera() + "%'");
			}
		}
		return lista;
	}

}
