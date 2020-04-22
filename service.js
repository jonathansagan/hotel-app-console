const request = require("request-promise-native");

class Service {

 listerClient() {
  return requestPromise(
    "https://hwa-spring.herokuapp.com/clients?start=0&size=10",
    { json: true }
  );
}


 ajouterClient(saisieNom, saisiePrenom) {
  return requestPromise("https://hwa-spring.herokuapp.com/clients", {
    json: true,
    method: "POST",
    body: {
      nom: saisieNom,
      prenoms: saisiePrenom,
    },
  });
}
}
module.exports = Service; 