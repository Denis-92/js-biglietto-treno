let distanzaDaPercorrere = prompt('Quanti chilometri da percorrere?');
let etaPasseggero = prompt('Età del passeggero?');

const prezzo = 0.21;
const scontoMinori = 0.8;
const scontoSenior = 0.6;

let costoBiglietto = distanzaDaPercorrere * prezzo;
let prezzoFinale = distanzaDaPercorrere * prezzo;

if (etaPasseggero < 18) {
    console.log('sconto minori', scontoMinori);
    console.log('costo biglietto', costoBiglietto);
    prezzoFinale = costoBiglietto * scontoMinori;
}

else {

    if (etaPasseggero > 65) {
        prezzoFinale = costoBiglietto * scontoSenior;
    }

}

//const risposta = `Il prezzo del biglietto è $(prezzoFinale)`;
console.log('prezzo finale prima del output', prezzoFinale);

document.getElementById('prezzoAcquisto').innerHTML = prezzoFinale;


//document.writeln('Il prezzo del tuo biglietto è');
//document.writeln(prezzoFinale);