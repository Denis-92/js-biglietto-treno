let distanzaDaPercorrere = prompt('Quanti chilometri da percorrere?');
let etaPasseggero = prompt('Età del passeggero?');

const prezzo = 0.21;
const scontoMinori = 0.8;
const scontoSenior = 0.6;

let costoBiglietto, prezzoFinale = distanzaDaPercorrere * prezzo;

if (etaPasseggero < 18) {
    let prezzoFinale = costoBiglietto * scontoMinori;
}

else {

    if (etaPasseggero > 65) {
        let prezzoFinale = costoBiglietto * scontoSenior;
    }

}

const risposta = `Il prezzo del biglietto è $(prezzoFinale)`;

document.getElementById('prezzoAcquisto').innerHTML = risposta;

/*
document.writeln('Il prezzo del tuo biglietto è');
document.writeln(prezzoFinale);*/