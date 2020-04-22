const Service = require('./service.js');
const service = new Service();

const readline = require('readline');
const rl = readline.createInterface({     
	input: process.stdin,     
	output: process.stdout 
});

class Presentation {
 start() {
    
    console.log("1. Lister les clients \n2. Ajouter un client\n99. Sortir");

    rl.question('',  (saisie)=> {
        if (saisie === '1') {
            console.log('>>> Liste des clients')
            service.listerClients()
						.then(listeClients => {
							console.log(listeClients);
							this.start();
						})
						.catch(err => console.log('Répétez svp : ',err));
                
        } else if (saisie === '2') {
            rl.question('Entrer le nom : ',  (saisieNom)=> {

                rl.question('Entrer le prenom du client : ',  (saisiePrenom) =>{

                    service.ajouterClient(saisieNom, saisiePrenom)
								.then(clientAjoute => {
									console.log(`client ajouté, uuid = ${clientAjoute.uuid} `);
									this.start();
								})
								.catch(err => console.log(`Erreur :  ${err}`));
                })
            })
        } else if (saisie === '99') {
            console.log("Aurevoir")
            rl.close();
        }
    })

}
}

module.exports = Presentation;