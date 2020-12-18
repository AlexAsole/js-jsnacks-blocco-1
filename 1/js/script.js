// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var primoNumero = parseInt(prompt('Inserisci il primo numero!'));
var secondoNumero = parseInt(prompt('Inserisci il secondo numero!'));

if (isNaN(primoNumero || secondoNumero)){
  alert('Numeri, per favore')
} else {
  if ( primoNumero > secondoNumero) {
    console.log(primoNumero)
  } else if (primoNumero < secondoNumero) {
    console.log(secondoNumero)
  } else {
    console.log('Pari')
  }

}
