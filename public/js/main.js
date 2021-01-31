class Lieu {
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes;
    }
}

class Personnes {
    constructor(nom,prenom,argent){
        this.nom = nom;
        this.prenom = prenom;
        this.argent = argent;
    }
    seDeplacer(depart, arriver, transport){
        depart.personnes.splice(depart.personnes.indexOf(this), 1)
        console.log(`${this.prenom} quitte ${depart.nom}`);
        if (transport.embarquer(this) == true) {
            arriver.personnes.push(this)
            console.log(`${this.prenom} est arriver a ${arriver.nom}`);
        } else {
            depart.personnes.push(this)
            console.log(`${depart.personnes} n'a pas assez d'argent, et reste a ${depart.maison}`);
        }
    }
}

class Bus {
    constructor(caisse){
    this.place = [];
    this.caisse = caisse;
    this.tarif = 2.80
    }
    embarquer(a){
        if (a.argent >= this.tarif) {
            this.place.push(a)
            console.log(`${a.prenom} est dans le bus`);
            a.argent -= this.tarif
            this.caisse += this.tarif
            this.place.splice(a)
            return true
        } else {
            console.log(`${a.prenom} n'est pas dans le bus`);
            return false
        }
    }
}


let perso = new Personnes ("mouna","abdel", 30)
let maison = new Lieu ("maison", [perso])
let molengeek = new Lieu("molengeek", [])
let snack = new Lieu("snack",[])
let transport = new Bus(0)



perso.seDeplacer(maison,molengeek,transport)
console.log("____________________");
perso.seDeplacer(molengeek,snack,transport)
console.log("____________________");
perso.seDeplacer(snack,maison,transport)




// class Users extends persons {
//     constructor(nom,prenom,age,email){
//         super (nom,prenom,age)
//         this.email = email;
//     }
// }
// let personnes = new Users("mouna","abdellah",20, "abc@gmail.com")
// console.log(personnes);
// // Faire une class parent "persons" qui prendra comme propriétés : nom, prénom ,âge. Créer une class extends de "persons". Rajoutez lui une propriété :email. 
// // Faites une instance de "persons"

