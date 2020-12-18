// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var listaInvitati = ['Mickey', 'Donald', 'Goofy', 'Daisy', 'Minnie']
var Presentazione = prompt('Benvenuto, il suo nome, prego!')
var Check

for (var i = 0; i < listaInvitati.length; i++) {
  if (listaInvitati[i] === Presentazione){
    Check = true;
  }
}
if (Check) {
  alert('Benvenuto, signor ' + Presentazione +'!');
} else {
  alert('Spiacente, signor ' + Presentazione + ' è una festa riservata!')
}
