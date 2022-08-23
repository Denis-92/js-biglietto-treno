let distanzaDaPercorrere;
let etaPasseggiero;

const prezzo = 0.21;
const scontoMinori = 0.8;
const scontoSenior = 0.6;

let costoBiglietto = distanzaDaPercorrere * prezzo;

if (etaPasseggiero < 18) {
    let prezzoFinale = costoBiglietto * scontoMinori;
}

else {

    if (etaPasseggiero > 65) {
        let prezzoFinale = costoBiglietto * scontoSenior;
    }

}