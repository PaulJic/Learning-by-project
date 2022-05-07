package test;

import java.util.ArrayList;
import java.util.List;

import model.CalcoloCondizioni;
import model.Cella;
import model.Colore;
import DAL.DatabaseParole;
import model.Tentativo;

public class Main {

	public static void main(String[] args) {

		List<Tentativo> tentativi = new ArrayList<>();
		
		tentativi.add(new Tentativo (new Cella[] { new Cella('c', Colore.GRIGIO), new Cella('o', Colore.GIALLO),
				new Cella('r', Colore.GRIGIO), new Cella('s', Colore.GIALLO), new Cella('a', Colore.GIALLO) }));
		
		tentativi.add(new Tentativo(new Cella[] { new Cella('i', Colore.GRIGIO), new Cella('s', Colore.GIALLO),
				new Cella('o', Colore.GIALLO), new Cella('l', Colore.GIALLO), new Cella('a', Colore.GIALLO) }));
		
		tentativi.add(new Tentativo(new Cella[] { new Cella('f', Colore.GRIGIO), new Cella('a', Colore.VERDE),
				new Cella('l', Colore.VERDE), new Cella('s', Colore.GIALLO), new Cella('o', Colore.VERDE) }));
		
		/*
		 * Tentativo tentativo1 = new Tentativo(new Cella[] { new Cella('g',
		 * Colore.GRIGIO), new Cella('i', Colore.GRIGIO), new Cella('o', Colore.GIALLO),
		 * new Cella('c', Colore.VERDE), new Cella('o', Colore.GRIGIO) });
		 * 
		 * Tentativo tentativo2 = new Tentativo(new Cella[] { new Cella('s',
		 * Colore.GRIGIO), new Cella('a', Colore.GRIGIO), new Cella('c', Colore.GIALLO),
		 * new Cella('c', Colore.GRIGIO), new Cella('o', Colore.GIALLO) });
		 * 
		 * 
		 * Tentativo tentativo2 = new Tentativo(new Cella[] { new Cella('c',
		 * Colore.GRIGIO), new Cella('o', Colore.GIALLO), new Cella('r', Colore.GRIGIO),
		 * new Cella('d', Colore.VERDE), new Cella('a', Colore.GIALLO) });
		 * 
		 * Tentativo tentativo3 = new Tentativo(new Cella[] { new Cella('t',
		 * Colore.VERDE), new Cella('o', Colore.GIALLO), new Cella('r', Colore.GRIGIO),
		 * new Cella('t', Colore.VERDE), new Cella('a', Colore.GRIGIO) });
		 * 
		 * Tentativo tentativo4 = new Tentativo(new Cella[] { new Cella('a',
		 * Colore.GRIGIO), new Cella('t', Colore.GIALLO), new Cella('o', Colore.GIALLO),
		 * new Cella('s', Colore.GRIGIO), new Cella('t', Colore.GIALLO) });
		 */
				
		List<String> condizioniTotali = new ArrayList<>();
		
		for (Tentativo tentativo : tentativi) {
			condizioniTotali.addAll(CalcoloCondizioni.calcola(tentativo));
		}

		List<String> listaParoleDB = DatabaseParole.trovaParole(condizioniTotali);

		for (String parola : listaParoleDB) {
			System.out.println(parola);
		}

	}

}
