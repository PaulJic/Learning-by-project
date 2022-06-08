# BrIghT group

### Componenti:

- Paul Sebastian Jicmon (**_team leader_**)
- Marika Crivellari
- Matteo Drago
- Simone Carè
- Damira Dedekbayeva

### Descrizione progetto

L'obiettivo è la realizzazione di un software per la risoluzione veloce di Wordle.
L'applicativo che andremo a sviluppare, attraverso il collegamento con un database di parole e l'utilizzo di un algoritmo per selezionale e mostrare le possibili soluzioni, consentirà all'utente di trovare in modo più rapido ed efficiente il vocabolo nascosto scegliendo tra le alternative più probabili.


### Linguaggi utilizzati

* Per la parte **_backend_** ci siamo avvalsi di Java per lo sviluppo dell'algotritmo e delle query che consentono al programma di selezionare le soluzioni più attendibili.
* Per quanto riguarda l'**_interfaccia grafica_** abbiamo utilizzato un file HTML(implementato con file CSS e JavaScript esterni).
* Per la struttura del **_database_** abbiamo utilizzato il SQL per la creazione e il popolamento delle tabelle.

### Manuale d'uso

Per utilizzare quetso software è necessario aprire [Wordle Italiano](https://wordleitaliano.com/) e in contemporanea l'applicativo. Una volta inserita una parola (che può essere una di quelle suggerite sull'interfaccia), bisogna: 

-Trascrivere le lettere all'interno delle caselle del nostro programma indicando la colorazione che viene assegnata ad esse dal gioco (*verde*: la lettera è contenuta nella parola ed è nella corretta posizione, *giallo*: la lettera è contenuta nella parola ma si trova nella posizione sbagliata, *grigio*: la lettera non è contenuta all'interno della parola). 

-Premere il bottone invio oppure enter da tastiera.  

Il nostro software selezionerà le parole corrispondenti alle caratteristiche restituite da Wordle prendendole da un database di vocaboli comprendente tutte le possibili soluzioni.
Man mano che si faranno tentativi il numero di suggerimenti andrà a ridursi fino a trovare la voce richiesta dal gioco.

### Documentazione frontend

Il codice di frontend è un file HTML con riferimenti esterni per quanto riguarda sia lo script (con JavaScript) che lo stile (con CSS).

Questa è la strutturazione nel file **_HTML_** della prima riga di celle:

            <td>
                <div class="col-xs-1 " style="max-width: 50px;">
                  <input class="form-control" type="text" maxlength="1" id="letter1">
                </div>
              </td>

              <td>
                <div class="col-xs-1" style="max-width: 50px;">
                  <input class="form-control" type="text" maxlength="1" id="letter2">
                </div>
              </td>
              <td>
                <div class="col-xs-1" style="max-width: 50px;">
                  <input class="form-control" type="text" maxlength="1" id="letter3">
                </div>
              </td>
              <td>
                <div class="col-xs-1" style="max-width: 50px;">
                  <input class="form-control" type="text" maxlength="1" id="letter4">
                </div>
              </td>
              <td>
                <div class="col-xs-1" style="max-width: 50px;">
                  <input class="form-control" type="text" maxlength="1" id="letter5">
                </div>
              </td>
              <td>
                <div class="col-xs-1">
                  <button type="button" class="btn btn-success" onclick="firsWord()">Invio</button>
                </div>
              </td>
            </tr>
            <td>

Mentre questa è la struttura dei primi **_5 bottoni radio_** per indicare il colore da assegnare ad ogni casella:


              <div class="btn-group noborder">
                <input type="radio" class="btn-check" name="color1" id="1p1l" autocomplete="off" value="grigio" checked>
                <label class="btn btn-outline-secondary" for="1p1l"></label>

                <input type="radio" class="btn-check" name="color1" id="2p1l" autocomplete="off" value="giallo">
                <label class="btn btn-outline-warning" for="2p1l"></label>

                <input type="radio" class="btn-check" name="color1" id="3p1l" autocomplete="off" value="verde">
                <label class="btn btn-outline-success" for="3p1l"></label>
              </div>
            </td>
            <td>
              <div class="btn-group noborder">
                <input type="radio" class="btn-check" name="color2" id="4p1l" autocomplete="off" value="grigio" checked>
                <label class="btn btn-outline-secondary" for="4p1l"></label>

                <input type="radio" class="btn-check" name="color2" id="5p1l" autocomplete="off" value="giallo">
                <label class="btn btn-outline-warning" for="5p1l"></label>

                <input type="radio" class="btn-check" name="color2" id="6p1l" autocomplete="off" value="verde">
                <label class="btn btn-outline-success" for="6p1l"></label>
              </div>
            </td>
            <td>
              <div class="btn-group noborder">
                <input type="radio" class="btn-check" name="color3" id="7p1l" autocomplete="off" value="grigio" checked>
                <label class="btn btn-outline-secondary" for="7p1l"></label>

                <input type="radio" class="btn-check" name="color3" id="8p1l" autocomplete="off" value="giallo">
                <label class="btn btn-outline-warning" for="8p1l"></label>

                <input type="radio" class="btn-check" name="color3" id="9p1l" autocomplete="off" value="verde">
                <label class="btn btn-outline-success" for="9p1l"></label>
              </div>
            </td>
            <td>
              <div class="btn-group noborder">
                <input type="radio" class="btn-check" name="color4" id="10p1l" autocomplete="off" value="grigio"
                  checked>
                <label class="btn btn-outline-secondary" for="10p1l"></label>

                <input type="radio" class="btn-check" name="color4" id="11p1l" autocomplete="off" value="giallo">
                <label class="btn btn-outline-warning" for="11p1l"></label>

                <input type="radio" class="btn-check" name="color4" id="12p1l" autocomplete="off" value="verde">
                <label class="btn btn-outline-success" for="12p1l"></label>
              </div>
            </td>
            <td>
              <div class="btn-group noborder">
                <input type="radio" class="btn-check" name="color5" id="13p1l" autocomplete="off" value="grigio"
                  checked>
                <label class="btn btn-outline-secondary" for="13p1l"></label>

                <input type="radio" class="btn-check" name="color5" id="14p1l" autocomplete="off" value="giallo">
                <label class="btn btn-outline-warning" for="14p1l"></label>

                <input type="radio" class="btn-check" name="color5" id="15p1l" autocomplete="off" value="verde">
                <label class="btn btn-outline-success" for="15p1l"></label>
              </div>
            </td>
            </tr>

Le restanti 4 righe (sia di celle che di radio button), avranno la stessa conformazione ma avranno ID differenti per facilitarne le modifiche stilistiche.

In questa parte di codice vengono caricati i link per i file **_CSS_** e **_JavaScript_**:

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossorigin="anonymous"></script>
    <script src="/js/main.js"></script>
    <link href="/css/styles.css" rel="stylesheet">

Nel file **_JavaScript_** possiamo trovare:

- Funzione che fa la chiamata _get_:

        async function getWord() {
            let url = 'https://bright-wordle.herokuapp.com/api/words';
            try {
                let res = await fetch(url);
                return await res.json();
                } catch (error) {
                  console.log(error);
                }
        }

- Funzione che _stampa l'oggetto_ dal get e _trasforma il JSON_ in una stringa più leggibile con meno parole:

        async function renderWords() {
            let wordNew = await getWord();
            console.log(wordNew);
            let str = ""
            wordNew.forEach(obj => { Object.values(obj).forEach((val, key) => { str += '' + val + ''; key != 2 ? str += ',\n' : str += '\n\n' }) })
            console.log(str)
            document.getElementById("indizzi").innerHTML = str;

            return wordNew;
        }

- Funzione di _reset_ di:

        - Partita:

        async function resetIndizzi() {
            let url = 'https://bright-wordle.herokuapp.com/api/reset';
            try {
                let res = await fetch(url);
                console.log("nice reset");
                return await res.json();
            }   catch (error) {
                console.log(error);
            }
        }     

        - DIV suggerimenti per iniziare:

        function resetIndizziInizio() {
            document.getElementById("inizio").innerHTML = "Parole consigliate per iniziare";
            document.getElementById("indizzi").innerHTML = "amaro, aroma, aereo, reato, torto,\n" +
                " sotto, tatto, osare, torta, ratto,\n" +
                " onore, stato, rosso, sorso, aceto, \n" +
                "trono, atrio, sosta, costo, tanto, \n" +
                " corso, poeta, arena, opera, porto";
        }

        - Resest raggruppati:
        
        function allReset() {    
            resetIndizzi();
            resetIndizziInizio();
            location.reload();
        }

- Funzione che _manda e riceve le soluzioni_. Questa _crea l'oggetto_ con i dati dal form e poi  _invia la parola_:

        - Bottone parola con log per test e invio prima parola:

        function firsWord() {

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
            console.log(word1);
            fetch('https://bright-wordle.herokuapp.com/api/word', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(word1),
        })
        console.log(getWord()); //log per test
        renderWords();

        document.getElementById("inizio").innerHTML = "Indizzi per indovinare";
        }

    Il resto del codice comprende quest'ultima funzione in relazione alla altre 4 parole.
