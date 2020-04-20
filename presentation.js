let readline = require('readline')
let service = require('./service')
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function start() {
    const menu = "1. Lister les clients \n2. Ajouter un client\n99. Sortir"
    console.log(menu)

    rl.question('', function (saisie) {
        if (saisie === '1') {
            console.log('>>> Liste des clients')
            service.listerClient(
                function (listeClient) {
                    listeClient.forEach(el => console.log(el.nom + ' ' + el.prenoms))
                    start()
                }, function (err) {
                    console.log('oops', err)
                    start()
                })
        } else if (saisie === '2') {
            rl.question('Entrer le nom : ', function (saisieNom) {

                rl.question('Entrer le prenom du client : ', function (saisiePrenom) {

                    service.ajouterClient(saisieNom, saisiePrenom, function (clientAjoute) {
                        console.log('Client créé uuid =', clientAjoute.uuid);
                        start()
                    }, function (err) {
                        console.log('oops', err)
                        start()
                    })

                })
            })
        } else if (saisie === '99') {
            console.log("Aurevoir")
            rl.close();
        }
    })

}

exports.start = start