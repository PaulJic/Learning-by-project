package com.jic.wordle.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="parole")
public class Word {
	
	@Id
	String word;

	public String getWord() {
		return word;
	}

	public void setWord(String word) {
		this.word = word;
	}


	
	
}
