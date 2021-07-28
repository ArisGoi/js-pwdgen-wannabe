//Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito e numero classe
var userName = prompt('Scrivi il tuo nome');
var userLastName = prompt('Scrivi li tuo cognome');
var userFavColor = prompt('Scrivi il tuo colore preferito');
const classNumber = 40;

//Scrivi sulla pagina nomecognomecolorepreferito40
var userPassword = userName + userLastName + userFavColor + classNumber;
document.getElementById('innerPW').innerHTML = userPassword;