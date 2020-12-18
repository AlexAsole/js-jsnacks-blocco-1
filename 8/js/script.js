// 8: Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.
var number = prompt('Inserisci un numero di 4 cifre!')
var result = 0;
if (number.length === 4){
  for (var x = 0; x < number.length; x++) {
    result += parseInt(number[x])
  }
  console.log(result)
} else {
  alert('Ho detto 4 cifre, testone!')
}
