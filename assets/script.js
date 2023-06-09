// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Nota:
// Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


function myFunction() {
    const nome = document.getElementById("myText").value;
    const chilometri = document.getElementById("numKm").value;
    const prezzo_minori_scontato = (0.21 * chilometri) - (((0.21 * chilometri) * 20) / 100);
    const prezzo_maggiori_scontato = (0.21 * chilometri) - (((0.21 * chilometri) * 40) / 100);
    let eta = document.getElementById("eta_1");
    document.getElementById("nome_pass").innerHTML = (nome);
    // document.getElementById("rRiepilogo").innerHTML = (risultato);
    document.getElementById('cRandom').innerHTML = (getRandomInt(9999));
    document.getElementById('num_car').innerHTML = (getRandomInt(10));



if (eta.value === 'min') {
    document.getElementById("rRiepilogo").innerHTML = (' ' + prezzo_minori_scontato.toFixed(2)) + ' ' + '€';
    document.getElementById('offerta').innerHTML = 'Sconto Minori';

    document.getElementById('risultato').innerHTML = (nome + ' ' + prezzo_minori_scontato.toFixed(2)) + '€';
}
else if (eta.value === 'magg') {

    document.getElementById("rRiepilogo").innerHTML = (' ' +  prezzo_maggiori_scontato.toFixed(2)) + ' ' + '€';
    document.getElementById('offerta').innerHTML = 'Sconto Anziani';

    document.getElementById('risultato').innerHTML = (nome + ' ' +  prezzo_maggiori_scontato.toFixed(2)) + '€';
}
else {
    document.getElementById("rRiepilogo").innerHTML =  ((' prezzo non scontato: ') + (0.21 * chilometri).toFixed(2)) + ' ' + ' €';
    document.getElementById('offerta').innerHTML = 'Biglietto standard';

    document.getElementById('risultato').innerHTML = (nome + (' prezzo non scontato: ') + (0.21 * chilometri).toFixed(2)) + '€';
}
}
function funzione2(){
    document.getElementById("myText").value = "";
    document.getElementById("numKm").value = "";
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    
}

console.log(getRandomInt(9999));













