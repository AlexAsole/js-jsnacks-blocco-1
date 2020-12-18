// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.
var numberArray = []
var add = 0;



// for (var i = 0; i < 5; i++) {
//
//   var number = parseInt(prompt('Inserisci un numero'));
//   if (isNaN(number)) {
//     alert('errore')
//   } else {
//   numberArray.push(number)
//   numberArray[i]
//   add += number;
// }
// }


var i = 0;
while (i < 5) {
  var number = parseInt(prompt('Inserisci un numero'));
  if (isNaN(number)) {
    alert('errore')
  } else {
  numberArray.push(number)
  numberArray[i]
  add += number;
}
i++
}


console.log(add)
