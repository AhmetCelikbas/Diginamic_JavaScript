
/*
    -> 1.2.1 : Les Types
 */

var maVariable = 10;

maVariable = "Formation module javascript";
maVariable = undefined;
maVariable = null;
maVariable = {
    nom: "Module JavaScript"
};

console.log('Ma variable : ', maVariable);


/*
    -> 1.2.2 : Les opérateurs
 */

var x;
var y;

console.log('Égalité faible : ', x == y);
console.log('Égalité forte : ', x === y);

x = 2;
y = 'Formation';

console.log('Égalité faible : ', x == y);
console.log('Égalité forte : ', x === y);


x = 2;
y = '2';

console.log('Égalité faible : ', x == y);
console.log('Égalité forte : ', x === y);

x = undefined;
y = null;

console.log('Égalité faible : ', x == y);
console.log('Égalité forte : ', x === y);

var adition1 = 20 + 5;
console.log("20 + 5 : ", adition1);

var adition2 = 20 + 'Formation';
console.log("20 + 'Formation' : ", adition2);

var adition3 = 20 + 5 + 'Formation';
console.log("20 + 5 + 'Formation' : ", adition3);

var adition4 = 20 + 'Formation' + 5;
console.log("20 + 'Formation' + 5 : ", adition4);

var adition5 = 'Formation' + 20 + 5;
console.log("'Formation' + 20 + 5 : ", adition5);

/*
    -> 1.2.3 : Les Fonctions
 */

function multiply(arg1, arg2) {
    console.log("Numbers of arguments", arguments.length);


    if(arg1 && typeof arg1 != 'number'){
        throw new Error("arg1 is not a number");
    }

    if(arg2 && typeof arg2 != 'number'){
        throw new Error("arg2 is not a number");
    }

    return arg1 * arg2;
}



try {
    console.log("multiply(10, 3) = ", multiply(2, 'Formation', 5));
} catch (e) {
    console.log(e);
}



(function () {
    console.log('Auto-invoquée');
})();


var logger = function (a) {
    console.log('1er argument :', a);
};
function firstCallBack(callback) {
    if (callback && typeof callback === 'function') {
        callback('mom premier callback');
    }
}
firstCallBack(logger);


var hello = function (name) {
    console.log('Hello ' + name);
};

function asyncWithCallback(name, callback) {
    if (callback && typeof callback === 'function') {
        console.log("async start 5sec");
        setTimeout(callback, 5000, name);
    }
}

asyncWithCallback("Ahmet", hello);


var formationJS = {
    nom: 'Module JavaScript',
    langage: 'JavaScript',
    dateDebut: '01/09/2017',
    dateFin: '05/09/2017',
    stagiaires: [{
        nom: 'Nom Exemple',
        prenom: 'Prenom Exemple'
    }],
    description: function () {
       return   this.nom + " " +
                this.dateDebut + " " +
                this.dateFin;
    }
};


console.log(
    'formationJS.nom', formationJS.nom,
    'formationJS.langage', formationJS.langage,
    'formationJS.dateDebut', formationJS.dateDebut,
    'formationJS.dateFin', formationJS.dateFin
);

formationJS.formateur = {
    nom: 'Hodicq',
    prenom: 'Nicolas'
};

console.log(
    'formationJS.nom', formationJS.nom,
    'formationJS.langage', formationJS.langage,
    'formationJS.dateDebut', formationJS.dateDebut,
    'formationJS.dateFin', formationJS.dateFin,
    'formationJS.formateur', formationJS.formateur.nom, formationJS.formateur.prenom
);

console.log(
    'formationJS.description()', formationJS.description()
);

delete formationJS.stagiaires;

console.log(formationJS);

function Formation (nom, langage) {
    this.nom = nom;
    this.langage = langage;
}

var formation = new Formation('Module JavaScript', 'JavaScript');

console.log(formation);



function Personne(nom, prenom, age) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
}

function Stagiaire(nom, prenom, age, conaissances) {
    Personne.call(this, nom, prenom, age);
    this.conaissances = conaissances;
}

Stagiaire.prototype = new Personne();
Stagiaire.prototype.constructor = Stagiaire;


var personne1 = new Personne("Celikbas", "Ahemet", 24);
console.log(personne1);

var stagiaire1 = new Stagiaire("Pickel", "Damien", 24, null);
console.log(stagiaire1);

