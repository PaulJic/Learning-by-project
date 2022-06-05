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
	/*
	* Restituisce stringa per la creazione della query riguardante le celle verdi
	* */
	public static String condizioneVerdi(Tentativo tentativo) {

		String condizione = "";
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
	/*
	* restituisce lista contente le condizioni per la query che restituirà
	* le parole non contententi quelle lettere la cui posizione
	* corrisponde alle lettre gialle dell'array */
	public static List<String> condizioneGialli(Tentativo tentativo) {
		List<String> lista= new ArrayList<>();
		for(int j=0;j<5;j++) {
			if(tentativo.getLettere()[j].getColore().equals("giallo")) {
				String condizion="_____";
				String condizioni=condizion.substring(0,j)+tentativo.getLettere()[j].getLettera()+condizion.substring(j+1);
				lista.add("word not like "+ "'"+condizioni+"'");
				
			}
		}
		return lista;
	}
	/*
	* restituisce lista contente le condizioni per le parole contenenti le lettere gialle
	* tenendo conto che la stessa lettera può esserci molteplici volte
	* */
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
	/*
	* Restituisce lista con condizioni per non ricevere le parole contenenti le lettere di colore grigio
	* */
	public static List<String> condizioneGrigi(Tentativo tentativo) {

		List<String> lista = new ArrayList<>();
		for (Cella cella : tentativo.getLettere()) {
			if (cella.getColore().equals("grigio") && !tentativo.contieneGiallo(cella.getLettera())) {
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
