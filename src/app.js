const prompt = require('prompt');
console.log("Entrez le calcul que vous voulez effectuer : ");
prompt.start();
prompt.get('calcul', function (err, result) {
    scanCalculate(result.calcul);
});

function scanCalculate(calculate) {
    console.log("calcul: " + calculate);
    //const word = calculate.split('');
    const chars = /[/+/-/*/%]/;
    console.log(calculate.search(chars));
}