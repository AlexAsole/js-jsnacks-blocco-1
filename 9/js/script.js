// Calcola la somma e la media dei primi 10 numeri.
var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var somma = 0;
for (x = 0; x < 10; x++){
  somma += list[x];
}
var media = somma / 10;

console.log('La somma dei primi 10 numeri dell\' array è: ' + somma);
console.log('La media aritmetica invece è: ' + media);
