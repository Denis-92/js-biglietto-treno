let distanzaDaPercorrere = prompt('Quanti chilometri da percorrere?');
let etaPasseggero = prompt('Età del passeggero?');

const prezzo = 0.21;
const scontoMinori = 0.8;
const scontoSenior = 0.6;

let costoBiglietto = distanzaDaPercorrere * prezzo;
let prezzoFinale = distanzaDaPercorrere * prezzo;

if ((isNaN(distanzaDaPercorrere)) || (isNaN(etaPasseggero))) {
    document.getElementById('prezzoAcquisto').innerHTML = `Dati inseriti non validi`;
}
else {
    if ((distanzaDaPercorrere === 0) || (etaPasseggero === 0)) {
        console.log('ciao visualizza', scontoMinori);
        document.getElementById('prezzoAcquisto').innerHTML = `Dati mancanti`;
    }

    else {


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

        console.log('prezzo finale prima del output', prezzoFinale);

        document.getElementById('prezzoAcquisto').innerHTML = `Il prezzo del tuo biglietto è ${prezzoFinale}`;
    }
}



//document.writeln('Il prezzo del tuo biglietto è');
//document.writeln(prezzoFinale);