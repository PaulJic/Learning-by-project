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
{
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
}
// maiuscole seconda riga
{
  function testUppercase12() {
    var x = document.getElementById("letter1-2");
    x.value = x.value.toUpperCase();
  }
  function testUppercase22() {
    var d = document.getElementById("letter2-2");
    d.value = d.value.toUpperCase();
  }
  function testUppercase32() {
    var x = document.getElementById("letter3-2");
    x.value = x.value.toUpperCase();
  }
  function testUppercase42() {
    var d = document.getElementById("letter4-2");
    d.value = d.value.toUpperCase();
  }
  function testUppercase52() {
    var d = document.getElementById("letter5-2");
    d.value = d.value.toUpperCase();
  }
}
// maiuscole terza riga
{
  function testUppercase13() {
    var x = document.getElementById("letter1-3");
    x.value = x.value.toUpperCase();
  }
  function testUppercase23() {
    var d = document.getElementById("letter2-3");
    d.value = d.value.toUpperCase();
  }
  function testUppercase33() {
    var x = document.getElementById("letter3-3");
    x.value = x.value.toUpperCase();
  }
  function testUppercase43() {
    var d = document.getElementById("letter4-3");
    d.value = d.value.toUpperCase();
  }
  function testUppercase53() {
    var d = document.getElementById("letter5-3");
    d.value = d.value.toUpperCase();
  }
}
// maiuscole quarta riga
{
  function testUppercase14() {
    var x = document.getElementById("letter1-4");
    x.value = x.value.toUpperCase();
  }
  function testUppercase24() {
    var d = document.getElementById("letter2-4");
    d.value = d.value.toUpperCase();
  }
  function testUppercase34() {
    var x = document.getElementById("letter3-4");
    x.value = x.value.toUpperCase();
  }
  function testUppercase44() {
    var d = document.getElementById("letter4-4");
    d.value = d.value.toUpperCase();
  }
  function testUppercase54() {
    var d = document.getElementById("letter5-4");
    d.value = d.value.toUpperCase();
  }
}
// maiuscole quinta riga
{
  function testUppercase15() {
    var x = document.getElementById("letter1-5");
    x.value = x.value.toUpperCase();
  }
  function testUppercase25() {
    var d = document.getElementById("letter2-5");
    d.value = d.value.toUpperCase();
  }
  function testUppercase35() {
    var x = document.getElementById("letter3-5");
    x.value = x.value.toUpperCase();
  }
  function testUppercase45() {
    var d = document.getElementById("letter4-5");
    d.value = d.value.toUpperCase();
  }
  function testUppercase55() {
    var d = document.getElementById("letter5-5");
    d.value = d.value.toUpperCase();
  }
}


//fa la chiamata get  
async function getWord() {
  let url = 'https://wordle-test.herokuapp.com/api/words';
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
  //console.log(wordNew);
  //trasforma il json in una stringa più leggibile con solo le parole
  let str = ""
  wordNew.forEach(obj => { Object.values(obj).forEach((val, key) => { str += '' + val + ''; key != 2 ? str += ',\n' : str += '\n\n' }) })
  console.log(str)
  document.getElementById("indizi").innerHTML = str;
}

//bottone reset "partita"
async function resetIndizi() {
  let url = 'https://wordle-test.herokuapp.com/api/reset';
  try {
    let res = await fetch(url);
    console.log("nice reset");
  } catch (error) {
    console.log(error);
  }
}
//reset div parole
function resetIndiziInizio() {
  document.getElementById("inizio").innerHTML = "Parole consigliate per iniziare";
  document.getElementById("indizi").innerHTML = "amaro, aroma, aereo, reato, torto,\n" +
    " sotto, tatto, osare, torta, ratto,\n" +
    " onore, stato, rosso, sorso, aceto, \n" +
    "trono, atrio, sosta, costo, tanto, \n" +
    " corso, poeta, arena, opera, porto";
}

//reset field
function resetInput (){
  $(':input').val('');
  document.getElementById("btn1").classList.remove("check");
  document.getElementById("1p1l").click();
  document.getElementById("4p1l").click();
  document.getElementById("7p1l").click();
  document.getElementById("10p1l").click();
  document.getElementById("13p1l").click();

  document.getElementById("tr1.1").classList.add("check");
  document.getElementById("tr1.2").classList.add("check");
  document.getElementById("1p2l").click();
  document.getElementById("4p2l").click();
  document.getElementById("7p2l").click();
  document.getElementById("10p2l").click();
  document.getElementById("13p2l").click();

  document.getElementById("tr2.1").classList.add("check");
  document.getElementById("tr2.2").classList.add("check");
  document.getElementById("1p3l").click();
  document.getElementById("4p3l").click();
  document.getElementById("7p3l").click();
  document.getElementById("10p3l").click();
  document.getElementById("13p3l").click();

  document.getElementById("tr3.1").classList.add("check");
  document.getElementById("tr3.2").classList.add("check");
  document.getElementById("1p4l").click();
  document.getElementById("4p4l").click();
  document.getElementById("7p4l").click();
  document.getElementById("10p4l").click();
  document.getElementById("13p4l").click();

  document.getElementById("tr4.1").classList.add("check");
  document.getElementById("tr4.2").classList.add("check");
  document.getElementById("1p5l").click();
  document.getElementById("4p5l").click();
  document.getElementById("7p5l").click();
  document.getElementById("10p5l").click();
  document.getElementById("13p5l").click();
}


//raggruppa i reset
function allReset() {
  resetIndizi();
  resetIndiziInizio();
  count = 0;
  resetInput();

}


//bottone prima parola, manda e riceve le soluzioni
async function firsWord() {

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
  let response=await fetch('https://wordle-test.herokuapp.com/api/word', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word1),
  });
  console.log(response.status);
  await renderWords();

  document.getElementById("inizio").innerHTML = "Indizi per indovinare";
}

//bottone secodna parola, manda e riceve le soluzioni
async function secondWord() {

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

  //invia la seconda parola
  let response=await fetch('https://wordle-test.herokuapp.com/api/word', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word2),
  });
  await renderWords();
  //console.log(getWord()); //log per test
  
}

//bottone terza parola, manda e riceve le soluzioni
async function thirdWord() {

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

  //invia la terza parola
  await fetch('https://wordle-test.herokuapp.com/api/word', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word3),
  })
  //console.log(getWord()); //log per test
  await renderWords();
}

//bottone quarta parola, manda e riceve le soluzioni
async function fourthWord() {

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

  //invia la quarta parola
  await fetch('https://wordle-test.herokuapp.com/api/word', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word4),
  })
  //console.log(getWord()); //log per test
  await renderWords();
}

//bottone quarta parola, manda e riceve le soluzioni
async function fifthWord() {

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

  //invia la quinta parola
  await fetch('https://wordle-test.herokuapp.com/api/word', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(word5),
  })
  //console.log(getWord()); //log per test
  await renderWords();
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



//test check se effettivamente è stato tutti inserito correttamente

//chek prima parola 
function word1check(){
  let a = document.getElementById("letter1").value;
  let b = document.getElementById("letter2").value;
  let c = document.getElementById("letter3").value;
  let d = document.getElementById("letter4").value;
  let e = document.getElementById("letter5").value;

  if( (a && b && c && d && e ) != "" ){
    return true;
  }else{
    return false;
  }
}
//chek seconda parola 
function word2check(){
  let a = document.getElementById("letter1-2").value;
  let b = document.getElementById("letter2-2").value;
  let c = document.getElementById("letter3-2").value;
  let d = document.getElementById("letter4-2").value;
  let e = document.getElementById("letter5-2").value;

  if( (a && b && c && d && e ) != "" ){
    return true;
  }else{
    return false;
  }
}
//chek terza parola 
function word3check(){
  let a = document.getElementById("letter1-3").value;
  let b = document.getElementById("letter2-3").value;
  let c = document.getElementById("letter3-3").value;
  let d = document.getElementById("letter4-3").value;
  let e = document.getElementById("letter5-3").value;

  if( (a && b && c && d && e ) != "" ){
    return true;
  }else{
    return false;
  }
}
//chek quarta parola 
function word4check(){
  let a = document.getElementById("letter1-4").value;
  let b = document.getElementById("letter2-4").value;
  let c = document.getElementById("letter3-4").value;
  let d = document.getElementById("letter4-4").value;
  let e = document.getElementById("letter5-4").value;

  if( (a && b && c && d && e ) != "" ){
    return true;
  }else{
    return false;
  }
}
//chek quinta parola 
function word5check(){
  let a = document.getElementById("letter1-5").value;
  let b = document.getElementById("letter2-5").value;
  let c = document.getElementById("letter3-5").value;
  let d = document.getElementById("letter4-5").value;
  let e = document.getElementById("letter5-5").value;

  if( (a && b && c && d && e ) != "" ){
    return true;
  }else{
    return false;
  }
}


//funzione del tasto invio che viene richiamata sia con enter che con la pressione del tasto
function sendAllWord(){
  count++;
  console.log(count);

  if(count == 1){
    //test per fare una validazione:
    if (word1check() == true) {
      console.log("mando prima parola");
      //firsWord();
      document.getElementById("tr1.1").classList.remove("check");
      document.getElementById("tr1.2").classList.remove("check");
      document.getElementById("btn1").classList.add("check");
    }else{
      alert("Mancano una o più lettere!!");
      count--;
    }
  }

  if(count == 2){
    if (word2check() == true) {
      console.log("mando seconda parola");
      //secondWord()
    document.getElementById("tr2.1").classList.remove("check");
    document.getElementById("tr2.2").classList.remove("check");
    document.getElementById("tr1.2").classList.add("check");
    }else{
      alert("Mancano una o più lettere!!");
      count--;
    }
  }
  if(count == 3){
    if (word3check() == true) {
      console.log("mando terza parola");
      //thirdWord();
      document.getElementById("tr3.1").classList.remove("check");
      document.getElementById("tr3.2").classList.remove("check");
      document.getElementById("tr2.2").classList.add("check");
    }else{
      alert("Mancano una o più lettere!!");
      count--;
    }
  }

  if(count == 4){
    if (word4check() == true) {
      console.log("mando quarta parola");
      //fourthWord();
      document.getElementById("tr4.1").classList.remove("check");
      document.getElementById("tr4.2").classList.remove("check");
      document.getElementById("tr3.2").classList.add("check");
    }else{
      alert("Mancano una o più lettere!!");
      count--;
    }
  }

  if(count == 5){
    if (word5check() == true) {
      console.log("mando quinta parola");
      //fifthWord();
    }else{
      alert("Mancano una o più lettere!!");
      count--;
    }
    
  }

  if (count == 6) {
    alert("Hai raggiunto il limite, per ricominicare la partita premi RESET");
    count--;
  }

}

//grafica 

//colore pulsanti prima riga 
{
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
  function addGray(){
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
  function addGray2(){
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
  function addGray3(){
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
  function addGray4(){
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
  function addGray5(){
    grey1 = document.getElementById("letter5");
    grey1.classList.add("bg-secondary");
  }
  }

//colore pulsanti seconda riga 
{
  //colore pulsanti prima lettera 
  function addOrange12(){
    orange = document.getElementById("letter1-2");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen12(){
    green1 = document.getElementById("letter1-2");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray12(){
    grey1 = document.getElementById("letter1-2");
    grey1.classList.add("bg-secondary");
  }
  
  //colore pulsanti seconda lettera 
  function addOrange22(){
    orange = document.getElementById("letter2-2");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen22(){
    green1 = document.getElementById("letter2-2");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray22(){
    grey1 = document.getElementById("letter2-2");
    grey1.classList.add("bg-secondary");
  }
  
  
  //colore pulsanti terza lettera 
  function addOrange32(){
    orange = document.getElementById("letter3-2");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen32(){
    green1 = document.getElementById("letter3-2");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray32(){
    grey1 = document.getElementById("letter3-2");
    grey1.classList.add("bg-secondary");
  }
  //colore pulsanti quarta lettera 
  function addOrange42(){
    orange = document.getElementById("letter4-2");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen42(){
    green1 = document.getElementById("letter4-2");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray42(){
    grey1 = document.getElementById("letter4-2");
    grey1.classList.add("bg-secondary");
  }
  //colore pulsanti quinta lettera 
  function addOrange52(){
    orange = document.getElementById("letter5-2");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen52(){
    green1 = document.getElementById("letter5-2");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray52(){
    grey1 = document.getElementById("letter5-2");
    grey1.classList.add("bg-secondary");
  }
  }

//colore pulsanti terza riga 
{
  //colore pulsanti prima lettera 
  function addOrange13(){
    orange = document.getElementById("letter1-3");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen13(){
    green1 = document.getElementById("letter1-3");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray13(){
    grey1 = document.getElementById("letter1-3");
    grey1.classList.add("bg-secondary");
  }
  
  //colore pulsanti seconda lettera 
  function addOrange23(){
    orange = document.getElementById("letter2-3");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen23(){
    green1 = document.getElementById("letter2-3");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray23(){
    grey1 = document.getElementById("letter2-3");
    grey1.classList.add("bg-secondary");
  }
  
  
  //colore pulsanti terza lettera 
  function addOrange33(){
    orange = document.getElementById("letter3-3");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen33(){
    green1 = document.getElementById("letter3-3");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray33(){
    grey1 = document.getElementById("letter3-3");
    grey1.classList.add("bg-secondary");
  }
  //colore pulsanti quarta lettera 
  function addOrange43(){
    orange = document.getElementById("letter4-3");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen43(){
    green1 = document.getElementById("letter4-3");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray43(){
    grey1 = document.getElementById("letter4-3");
    grey1.classList.add("bg-secondary");
  }
  //colore pulsanti quinta lettera 
  function addOrange53(){
    orange = document.getElementById("letter5-3");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen53(){
    green1 = document.getElementById("letter5-3");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray53(){
    grey1 = document.getElementById("letter5-3");
    grey1.classList.add("bg-secondary");
  }
  }

//colore pulsanti quarta riga 
{
  //colore pulsanti prima lettera 
  function addOrange14(){
    orange = document.getElementById("letter1-4");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen14(){
    green1 = document.getElementById("letter1-4");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray14(){
    grey1 = document.getElementById("letter1-4");
    grey1.classList.add("bg-secondary");
  }
  
  //colore pulsanti seconda lettera 
  function addOrange24(){
    orange = document.getElementById("letter2-4");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen24(){
    green1 = document.getElementById("letter2-4");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray24(){
    grey1 = document.getElementById("letter2-4");
    grey1.classList.add("bg-secondary");
  }
  
  
  //colore pulsanti terza lettera 
  function addOrange34(){
    orange = document.getElementById("letter3-4");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen34(){
    green1 = document.getElementById("letter3-4");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray34(){
    grey1 = document.getElementById("letter3-4");
    grey1.classList.add("bg-secondary");
  }
  //colore pulsanti quarta lettera 
  function addOrange44(){
    orange = document.getElementById("letter4-4");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen44(){
    green1 = document.getElementById("letter4-4");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray44(){
    grey1 = document.getElementById("letter4-4");
    grey1.classList.add("bg-secondary");
  }
  //colore pulsanti quinta lettera 
  function addOrange54(){
    orange = document.getElementById("letter5-4");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen54(){
    green1 = document.getElementById("letter5-4");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray54(){
    grey1 = document.getElementById("letter5-4");
    grey1.classList.add("bg-secondary");
  }
  }

//colore pulsanti quinta riga 
{
  //colore pulsanti prima lettera 
  function addOrange15(){
    orange = document.getElementById("letter1-5");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen15(){
    green1 = document.getElementById("letter1-5");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray15(){
    grey1 = document.getElementById("letter1-5");
    grey1.classList.add("bg-secondary");
  }
  
  //colore pulsanti seconda lettera 
  function addOrange25(){
    orange = document.getElementById("letter2-5");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen25(){
    green1 = document.getElementById("letter2-5");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray25(){
    grey1 = document.getElementById("letter2-5");
    grey1.classList.add("bg-secondary");
  }
  
  
  //colore pulsanti terza lettera 
  function addOrange35(){
    orange = document.getElementById("letter3-5");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen35(){
    green1 = document.getElementById("letter3-5");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray35(){
    grey1 = document.getElementById("letter3-5");
    grey1.classList.add("bg-secondary");
  }
  //colore pulsanti quarta lettera 
  function addOrange45(){
    orange = document.getElementById("letter4-5");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen45(){
    green1 = document.getElementById("letter4-5");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray45(){
    grey1 = document.getElementById("letter4-5");
    grey1.classList.add("bg-secondary");
  }
  //colore pulsanti quinta lettera 
  function addOrange55(){
    orange = document.getElementById("letter5-5");
    orange.classList.remove("bg-secondary");
    orange.style.backgroundColor = 'orange';
  }
  function addGreen55(){
    green1 = document.getElementById("letter5-5");
    green1.classList.remove("bg-secondary");
    green1.style.backgroundColor = 'green';
  }
  function addGray55(){
    grey1 = document.getElementById("letter5-5");
    grey1.classList.add("bg-secondary");
  }
  }

