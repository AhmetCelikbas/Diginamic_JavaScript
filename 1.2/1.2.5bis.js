console.log('Nom fichier js 2', nom);

function sayHello () {
    var nom = 'Niko 2';
    console.log('sayHello fichier js 2', nom);
}
nom = 'Nom global à changer';

sayHello();

console.log('Nom : :', nom)

console.log("auteur depuis 2eme fichier:", window.auteur);
console.log("contactsService depuis 2eme fichier:", window.contactsService.getContacts());