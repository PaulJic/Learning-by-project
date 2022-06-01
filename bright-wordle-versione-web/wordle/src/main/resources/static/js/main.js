/* prime 5 funzioni per l autocompletamento */

//riga per la prima riga (autocompletamento)
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

//riga per la seconda riga (autocompletamento)
var $inp2 = $(".passInput2");
$inp2.on({
 input: function(ev) {
  if(this.value) {
    $inp2.eq($inp2.index(this) + 1).focus();
  }
 },
 keydown: function(ev) {
  var i = $inp2.index(this);
  if(ev.which===8 && !this.value && i) {
    $inp2.eq(i - 1).focus();
  }
 }
});
//riga per la terza riga (autocompletamento)
var $inp3 = $(".passInput3");
$inp3.on({
 input: function(ev) {
  if(this.value) {
    $inp3.eq($inp3.index(this) + 1).focus();
  }
 },
 keydown: function(ev) {
  var i = $inp3.index(this);
  if(ev.which===8 && !this.value && i) {
    $inp3.eq(i - 1).focus();
  }
 }
});
//riga per la quarta riga (autocompletamento)
var $inp4 = $(".passInput4");
$inp4.on({
 input: function(ev) {
  if(this.value) {
    $inp4.eq($inp4.index(this) + 1).focus();
  }
 },
 keydown: function(ev) {
  var i = $inp4.index(this);
  if(ev.which===8 && !this.value && i) {
    $inp4.eq(i - 1).focus();
  }
 }
});
//riga per la quinta riga (autocompletamento)
var $inp5 = $(".passInput5");
$inp5.on({
 input: function(ev) {
  if(this.value) {
    $inp5.eq($inp5.index(this) + 1).focus();
  }
 },
 keydown: function(ev) {
  var i = $inp5.index(this);
  if(ev.which===8 && !this.value && i) {
    $inp5.eq(i - 1).focus();
  }
 }
});



// maiuscole prima riga
function testUppercase() {
  var x = document.getElementById("letter1");
  x.value = x.value.toUpperCase();
}
function testUppercase2() {
  var d = document.getElementById("letter2");
  d.value = d.value.toUpperCase();
}
function testUppercase3() {
  var x = document.getElementById("letter3");
  x.value = x.value.toUpperCase();
}
function testUppercase4() {
  var d = document.getElementById("letter4");
  d.value = d.value.toUpperCase();
}
function testUppercase5() {
  var d = document.getElementById("letter5");
  d.value = d.value.toUpperCase();
}


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
  $(':input').val('');
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

//grafica 

//colore pulsanti prima lettera 
function addOrange1(){
  orange = document.getElementById("letter1");
  orange.classList.remove("bg-secondary");
  orange.style.backgroundColor = 'orange';
}
function addGreen1(){
  green1 = document.getElementById("letter1");
  green1.classList.remove("bg-secondary");
  green1.style.backgroundColor = 'green';
}
function addWhite(){
  grey1 = document.getElementById("letter1");
  grey1.classList.add("bg-secondary");
}

//colore pulsanti seconda lettera 
function addOrange2(){
  orange = document.getElementById("letter2");
  orange.classList.remove("bg-secondary");
  orange.style.backgroundColor = 'orange';
}
function addGreen2(){
  green1 = document.getElementById("letter2");
  green1.classList.remove("bg-secondary");
  green1.style.backgroundColor = 'green';
}
function addWhite2(){
  grey1 = document.getElementById("letter2");
  grey1.classList.add("bg-secondary");
}


//colore pulsanti terza lettera 
function addOrange3(){
  orange = document.getElementById("letter3");
  orange.classList.remove("bg-secondary");
  orange.style.backgroundColor = 'orange';
}
function addGreen3(){
  green1 = document.getElementById("letter3");
  green1.classList.remove("bg-secondary");
  green1.style.backgroundColor = 'green';
}
function addWhite3(){
  grey1 = document.getElementById("letter3");
  grey1.classList.add("bg-secondary");
}
//colore pulsanti quarta lettera 
function addOrange4(){
  orange = document.getElementById("letter4");
  orange.classList.remove("bg-secondary");
  orange.style.backgroundColor = 'orange';
}
function addGreen4(){
  green1 = document.getElementById("letter4");
  green1.classList.remove("bg-secondary");
  green1.style.backgroundColor = 'green';
}
function addWhite4(){
  grey1 = document.getElementById("letter4");
  grey1.classList.add("bg-secondary");
}
//colore pulsanti quinta lettera 
function addOrange5(){
  orange = document.getElementById("letter5");
  orange.classList.remove("bg-secondary");
  orange.style.backgroundColor = 'orange';
}
function addGreen5(){
  green1 = document.getElementById("letter5");
  green1.classList.remove("bg-secondary");
  green1.style.backgroundColor = 'green';
}
function addWhite5(){
  grey1 = document.getElementById("letter5");
  grey1.classList.add("bg-secondary");
}

//test per togliere i 5 pulsanti invio e fare tutto con un solo pulsante e tasto invio
let count=0;
//questa funzione viene  eseguita ogni volta che viene premuto invio su qualsiasi input
$('.container').on('keydown', 'input', function(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  	e.stopImmediatePropagation();
    //Do your stuff...
    document.getElementById("btnEnter").click();
  }
});

//funzione del tasto invio che viene richiamata sia con enter che con la pressione del tasto
function sendAllWord(){
  count++;
  console.log(count);
  if(count == 1){
    console.log("mando prima parola");
    firsWord();
  }
  if(count == 2){
    console.log("mando seconda parola");
    secondWord()
  }
  if(count == 3){
    console.log("mando terza parola");
    thirdWord();
  }
  if(count == 4){
    console.log("mando quarta parola");
    fourthWord();
  }
  if(count == 5){
    console.log("mando quinta parola");
    fifthWord();
  }
  if (count == 6) {
    console.log("troppi tentantivi");
  }

}


