// Chiedi all'utente il suo nome
const nome = prompt("Inserisci il tuo nome:");

// Chiedi all'utente il suo cognome
const cognome = prompt("Inserisci il tuo cognome:");

// Chiedi all'utente il suo colore preferito
const colorePreferito = prompt("Inserisci il tuo colore preferito:");

// Componi la stringa finale

// Scrivi il risultato sulla pagina
document.getElementById("info").innerHTML =
  nome + cognome + colorePreferito + "12";
