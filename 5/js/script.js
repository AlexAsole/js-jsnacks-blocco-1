// blocco-5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.
var dispari = [];
var request;
for (var i = 1; i <= 6; i++) {
  request = parseInt(prompt('Inserisci un numero!'));
  if (i % 2 !== 0){
    dispari.push(request)
    //potevo mettere console.log(request), ma che palle, noia
  }
}

console.log(dispari);

for (var i = 0; i < dispari.length; i++) {
  console.log(dispari[i])
}
