const prompt = require('prompt');
console.log("Entrez le calcul que vous voulez effectuer : ");
prompt.start();
prompt.get('calcul', function (err, result) {
    console.log(result.calcul);
});
