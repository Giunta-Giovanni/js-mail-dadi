// PROCEDIMENTO
// numero random User
let numeroUser = Math.floor(Math.random() * 6) + 1;
console.log("Lo user: ", numeroUser);

// numero random computer
let numeroPc = Math.floor(Math.random() * 6) + 1;
console.log("Il Pc: ", numeroPc);

// se il giocatore ha il numero piu grande vince
if (numeroUser > numeroPc) {
    console.log("Ha vinto l'user");
}// altrimenti se ha vinto il Pc
else if (numeroPc > numeroUser) {
    console.log("Ha vinto il Pc");
    
}// altrimenti parità
else {
    console.log("Parità");
}