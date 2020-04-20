let request = require('request')

function listerClient(callbackSuccess, callbackErr) {
    request('http://localhost:8080/clients?start=0&size=10', { json: true }, function(err, res, body) {
        if (err) { 
            callbackErr(err)
        } else {
            callbackSuccess(body)
        }
    });
}
exports.listerClient = listerClient

function ajouterClient(saisieNom, saisiePrenom, callbackSuccess, callbackErr) {
    request('http://localhost:8080/clients', { json: true,
    method: 'POST',
    body: {
        nom : saisieNom,
        prenoms : saisiePrenom
    }
}, function(err, res, body) {
    if (err) { 
        callbackErr(err)
    } else {
        callbackSuccess(body)
    }
});
}
 exports.ajouterClient = ajouterClient