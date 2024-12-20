// PROCEDIMENTO

// INPUT
// - creazione di una lista array per inserire le email
const emails = ['anna.mancini87@example.com', 'luca.rossi92@example.com', 'giulia.verdi2024@example.com','marco.bianchi123@example.com', 'francesca.neri88@example.com'];
console.log(emails);
const n = emails.length; 

//  utilizzare un prompt per chiedere l'inserimento della email
let richiesta = prompt ('inserisci la tua email');

// variabile che memorizza lo stato della ricerca inizializzata con falso 
let trovato = false;
// aprire un ciclo for
for (let i = 0; i < n; i++) {
    
//  crea una variabile if controllando che l'utente è gia registrato è la sua email si trova all'interno
    if (richiesta === emails[i]) {

    // variabile che memorizza lo stato della ricerca con vero
        trovato = true;

        //se si, stampa un messaggio che dice che l'utente si trova nella lista
        console.log("l'utente è registrato");
    }
}
// se dopo il for la variabile non ha cambiato lo stato significa che la richiesta non è stata trovata
if (trovato === false) {

    //se no, stampa un messaggio che dice che l'utente non è registrato

    console.log("l'utente non è registrato");
    
    
}