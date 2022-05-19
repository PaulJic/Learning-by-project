package com.jic.wordle.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jic.wordle.entities.Word;
import com.jic.wordle.model.CalcoloCondizioni;
import com.jic.wordle.model.Cella;
import com.jic.wordle.model.Tentativo;
import com.jic.wordle.services.WordService;
import com.jic.wordle.services.WordServiceImpl;

@RestController
@RequestMapping("api")
public class WordleREST {
	
	@Autowired
	private WordServiceImpl service;
	
	@PostMapping("word")
	public void setParole(@RequestBody Cella[] t){
		WordServiceImpl.tentativi.add(new Tentativo(t));
	}
	@GetMapping("words")
	public List<Word> getParole(){
		for (Tentativo tentativo : WordServiceImpl.tentativi)
			WordServiceImpl.condizioni.addAll(CalcoloCondizioni.calcola(tentativo));
		return service.findWordss();
	}
	@GetMapping("reset")
	public void resetTentativi() {
		WordServiceImpl.tentativi.clear();
		WordServiceImpl.condizioni.clear();
	}
	
}
