// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
var name1 = prompt('Inserisci la prima parola');
var name2 = prompt('Inserisci la seconda parola');

var l1 = name1.length;
var l2 = name2.length;

if (l1 > l2) {
  console.log(name1 + ' ' + name2)
} else if (l1 < l2) {
  console.log(name2 + ' ' + name1)
} else {
  console.log('Sono lunghi uguali ' + name1 + ' ' + name2)
}
