let distanzaDaPercorrere = prompt('Quanti chilometri devi percorrere?');
let etaPasseggero = prompt('Eta\' del passeggero?');

const prezzo = 0.21;
const scontoMinori = 0.8;
const scontoSenior = 0.6;

let costoBiglietto = distanzaDaPercorrere * prezzo;

if (etaPasseggero < 18) {
    let prezzoFinale = costoBiglietto * scontoMinori;
}

else {

    if (etaPasseggero > 65) {
        let prezzoFinale = costoBiglietto * scontoSenior;
    }

}