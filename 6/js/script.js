// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente. (limitato N a 10)
var base = parseInt(prompt('Inserisci un numero!'))
if (base > 10){
  alert('Numero troppo elevato, vorrei agguantarlo')
} else {
  for ( i = 1; i <= base; i++){
  console.log(Math.pow(i, 3))

  }
}
