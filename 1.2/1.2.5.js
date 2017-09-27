var nom = 'Nom global';

function sayHello() {
    var nom = 'Niko';
    console.log('Nom : ',nom);
}

sayHello();

console.log('Nom : ', nom);



(function (window) {
    window.auteur = {nom : "Celikbas", prenom: "Ahmet"};
})(window);


(function (window) {

    var contactsService = {};

    contactsService.getContacts = function () {

        return [
            window.auteur,
            {nom : "Pickel", prenom: "Damien"},
            {nom : "Basso", prenom: "Angelo"}
        ]
    };

    window.contactsService = contactsService;

})(window);

console.log(auteur);

console.log(contactsService.getContacts());