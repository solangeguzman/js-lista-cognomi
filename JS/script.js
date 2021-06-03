var cognomi= ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var usuario= prompt('Inserisci il tuo cognome!');
cognomi.push(usuario);
var num= cognomi.indexOf(usuario) + 1;
document.getElementById('num').innerHTML = "Sei nella posizione="+ num;

x = 0;
while (x<cognomi){
    document.getElementById('list').innerHTML+= + cognomi[x];
    x++;
}

