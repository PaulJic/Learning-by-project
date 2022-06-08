package com.bright.wordle.model;

import java.util.ArrayList;
import java.util.List;


public class CalcoloCondizioni {
	/**
	 * A partire da un Tentativo, restituisce una lista che presenta tutte le 
	 * condizioni necessarie a genera una query che filtra i record del DB
	 * @param tentativo oggetto di classe Tentativo dal quale generare le condizioni
	 * */
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
	/**
	* Restituisce stringa per la creazione della query riguardante le celle verdi
	* @param tentativo Tentativo dal quale generare le condizioni
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
	/**
	* restituisce lista contente le condizioni per la query che selezionerà
	* le parole non contententi quelle lettere la cui posizione
	* corrisponde alle lettere gialle dell'array 
	* @param tentativo Tentativo dal quale generare le condizioni
	* */
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
	/**
	* restituisce lista contente le condizioni per generare una query che selezionerà le parole che presentano le lettere gialle
	* tenendo conto che la stessa lettera può esserci molteplici volte
	* @param tentativo dal quale generare le condizioni
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
	/**
	* Restituisce lista con le condizione per generare la query che selezionerà le parole non contenenti le lettere di colore grigio
	* @param tentativo dal quale generare le condizioni
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
