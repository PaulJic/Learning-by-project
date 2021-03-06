package com.bright.wordle.integration;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.bright.wordle.entities.Word;
import com.bright.wordle.model.CalcoloCondizioni;
import com.bright.wordle.model.Cella;
import com.bright.wordle.model.Tentativo;
import com.bright.wordle.services.WordServiceImpl;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@CrossOrigin("*")
@RestController
@RequestMapping("api")
public class WordleREST {

	private WordServiceImpl service=new WordServiceImpl();
	/**
	* riceve per parametro il body della request contenente un array di oggetti Cella
	* che saranno utiizzati per generare le condizioni della query con cui interrogare il db.
	* queste condizioni saranno poi il valore del cookie, accessibile solo dal lato server, che verrà inviato nella response.
	* @param tent Array contenente oggetti classe Cella
	* */
	@PostMapping("word")
	public void setParole(@RequestBody Cella[] tent, HttpServletResponse response,HttpServletRequest request) throws IOException {
		if(Arrays.stream(tent,0,5).anyMatch(x-> x.getColore().isEmpty()|| !(x.getColore().equals("grigio") || x.getColore().equals("verde")|| x.getColore().equals("giallo")) || !Character.isLetter(x.getLettera()))){
			response.sendError(400, "Not accepted values present in color or lettera");
		}
		for (Cella cella : tent) {
			cella.setLettera(cella.getLettera());
		}
		Cookie cookie;
		if (request.getCookies() != null && !request.getCookies()[0].getValue().isEmpty()) {
			cookie = new Cookie("cond", (String.join(" AND ", CalcoloCondizioni.calcola(new Tentativo(tent))) + " AND " + request.getCookies()[0].getValue()).replace(",", "|").replace(" ", "9"));
		}
		else{
			cookie=new Cookie("cond", String.join(" AND ",CalcoloCondizioni.calcola(new Tentativo(tent))).replace(",", "|").replace(" ", "9"));
		}
		cookie.setHttpOnly(true);
		cookie.setPath("/api");
		response.addCookie(cookie);
	}
	/**
	* Utilizzando il cookie della request interroga il DB e riceve La lista di parole
	* */
	@GetMapping("words")
	public List<Word> getParole(HttpServletRequest request,HttpServletResponse response) throws IOException {
		Cookie[] tmp=request.getCookies();
		if (tmp==null){
			response.sendError(400,"Cookie is null");
			return new ArrayList<Word>();
		}
		else{
		return service.findWordss(tmp[0].getValue().replace("9", " ").replace("|",","));
	}}
	/**
	* Viene resettato il valore del cookie
	* */
	@GetMapping("reset")
	public void resetTentativi(HttpServletResponse response) {
		Cookie cookie=new Cookie("cond", "");;
		cookie.setHttpOnly(true);
		cookie.setPath("/api");
		response.addCookie(cookie);
	}

}
