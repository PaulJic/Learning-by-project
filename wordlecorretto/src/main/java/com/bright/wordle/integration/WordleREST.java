package com.bright.wordle.integration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.bright.wordle.entities.Word;
import com.bright.wordle.model.CalcoloCondizioni;
import com.bright.wordle.model.Cella;
import com.bright.wordle.model.Tentativo;
import com.bright.wordle.services.WordServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("api")
public class WordleREST {

	@Autowired
	private WordServiceImpl service;

	@PostMapping("word")
	public void setParole(@RequestBody Cella[] t) {
		WordServiceImpl.tentativi.add(new Tentativo(t));
	}

	@GetMapping("words")
	public List<Word> getParole() {
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
