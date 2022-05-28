
//funziona con la prima riga (per altre righe boh)
var $inp = $(".passInput");
$inp.on({
 input: function(ev) {
  if(this.value) {
    $inp.eq($inp.index(this) + 1).focus();
  }
 },
 keydown: function(ev) {
  var i = $inp.index(this);
  if(ev.which===8 && !this.value && i) {
    $inp.eq(i - 1).focus();
  }
 }
});

//test seconda riga



//fa la chiamata get  
async function getWord() {
  let url = 'https://bright-wordle.herokuapp.com/api/words';
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
//stampa l obj restituito dal get
async function renderWords() {
  let wordNew = await getWord();
  console.log(wordNew);
  //trasforma il json in una stringa più leggibile con solo le parole
  let str = ""
  wordNew.forEach(obj => { Object.values(obj).forEach((val, key) => { str += '' + val + ''; key != 2 ? str += ',\n' : str += '\n\n' }) })
  console.log(str)
  document.getElementById("indizi").innerHTML = str;
  return wordNew;
}

//bottone reset "partita"
async function resetIndizzi() {
  let url = 'https://bright-wordle.herokuapp.com/api/reset';
  try {
    let res = await fetch(url);
    console.log("nice reset");
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
//reset div parole
function resetIndizziInizio() {
  document.getElementById("inizio").innerHTML = "Parole consigliate per iniziare";
  document.getElementById("indizi").innerHTML = "amaro, aroma, aereo, reato, torto,\n" +
    " sotto, tatto, osare, torta, ratto,\n" +
    " onore, stato, rosso, sorso, aceto, \n" +
    "trono, atrio, sosta, costo, tanto, \n" +
    " corso, poeta, arena, opera, porto";
}

//raggruppa i reset
function allReset() {
  resetIndizzi();
  resetIndizziInizio();
  //TEST reset campi
}



//bottone prima parola, manda e riceve le soluzioni
function firsWord() {

  //crea l oggetto con i dati dal form (prima parola)
  let word1 = [
    {
      lettera: document.getElementById("letter1").value,
      colore: document.querySelector('input[name="color1"]:checked').value
    },
    {

      lettera: document.getElementById("letter2").value,
      colore: document.querySelector('input[name="color2"]:checked').value
    },
    {
      lettera: document.getElementById("letter3").value,
      colore: document.querySelector('input[name="color3"]:checked').value

    },
    {
      lettera: document.getElementById("letter4").value,
      colore: document.querySelector('input[name="color4"]:checked').value
    },
    {
      lettera: document.getElementById("letter5").value,
      colore: document.querySelector('input[name="color5"]:checked').value
    }
  ]

  //log per test
  console.log(word1);

  //invia la prima parola
  fetch('https://bright-wordle.herokuapp.com/api/word', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word1),
  })
  console.log(getWord()); //log per test
  renderWords();

  document.getElementById("inizio").innerHTML = "Indizi per indovinare";
}





//bottone secodna parola, manda e riceve le soluzioni
function secondWord() {

  //crea l oggetto con i dati dal form (prima parola)
  let word2 = [
    {
      lettera: document.getElementById("letter1-2").value,
      colore: document.querySelector('input[name="color1-2"]:checked').value
    },
    {

      lettera: document.getElementById("letter2-2").value,
      colore: document.querySelector('input[name="color2-2"]:checked').value
    },
    {
      lettera: document.getElementById("letter3-2").value,
      colore: document.querySelector('input[name="color3-2"]:checked').value

    },
    {
      lettera: document.getElementById("letter4-2").value,
      colore: document.querySelector('input[name="color4-2"]:checked').value
    },
    {
      lettera: document.getElementById("letter5-2").value,
      colore: document.querySelector('input[name="color5-2"]:checked').value
    }
  ]

  //log per test
  console.log(word2);

  //invia la prima parola
  fetch('https://bright-wordle.herokuapp.com/api/word', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word2),
  })
  console.log(getWord()); //log per test
  renderWords();
}


//bottone terza parola, manda e riceve le soluzioni
function thirdWord() {

  //crea l oggetto con i dati dal form (prima parola)
  let word3 = [
    {
      lettera: document.getElementById("letter1-3").value,
      colore: document.querySelector('input[name="color1-3"]:checked').value
    },
    {

      lettera: document.getElementById("letter2-3").value,
      colore: document.querySelector('input[name="color2-3"]:checked').value
    },
    {
      lettera: document.getElementById("letter3-3").value,
      colore: document.querySelector('input[name="color3-3"]:checked').value

    },
    {
      lettera: document.getElementById("letter4-3").value,
      colore: document.querySelector('input[name="color4-3"]:checked').value
    },
    {
      lettera: document.getElementById("letter5-3").value,
      colore: document.querySelector('input[name="color5-3"]:checked').value
    }
  ]

  //log per test
  console.log(word3);

  //invia la prima parola
  fetch('https://bright-wordle.herokuapp.com/api/word', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word3),
  })
  console.log(getWord()); //log per test
  renderWords();
}



//bottone quarta parola, manda e riceve le soluzioni
function fourthWord() {

  //crea l oggetto con i dati dal form (prima parola)
  let word4 = [
    {
      lettera: document.getElementById("letter1-4").value,
      colore: document.querySelector('input[name="color1-4"]:checked').value
    },
    {

      lettera: document.getElementById("letter2-4").value,
      colore: document.querySelector('input[name="color2-4"]:checked').value
    },
    {
      lettera: document.getElementById("letter3-4").value,
      colore: document.querySelector('input[name="color3-4"]:checked').value

    },
    {
      lettera: document.getElementById("letter4-4").value,
      colore: document.querySelector('input[name="color4-4"]:checked').value
    },
    {
      lettera: document.getElementById("letter5-4").value,
      colore: document.querySelector('input[name="color5-4"]:checked').value
    }
  ]

  //log per test
  console.log(word4);

  //invia la prima parola
  fetch('https://bright-wordle.herokuapp.com/api/word', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word4),
  })
  console.log(getWord()); //log per test
  renderWords();
}




//bottone quarta parola, manda e riceve le soluzioni
function fifthWord() {

  //crea l oggetto con i dati dal form (prima parola)
  let word5 = [
    {
      lettera: document.getElementById("letter1-5").value,
      colore: document.querySelector('input[name="color1-5"]:checked').value
    },
    {

      lettera: document.getElementById("letter2-5").value,
      colore: document.querySelector('input[name="color2-5"]:checked').value
    },
    {
      lettera: document.getElementById("letter3-5").value,
      colore: document.querySelector('input[name="color3-5"]:checked').value

    },
    {
      lettera: document.getElementById("letter4-5").value,
      colore: document.querySelector('input[name="color4-5"]:checked').value
    },
    {
      lettera: document.getElementById("letter5-5").value,
      colore: document.querySelector('input[name="color5-5"]:checked').value
    }
  ]

  //log per test
  console.log(word5);

  //invia la prima parola
  fetch('https://bright-wordle.herokuapp.com/api/word', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word5),
  })
  console.log(getWord()); //log per test
  renderWords();
}






