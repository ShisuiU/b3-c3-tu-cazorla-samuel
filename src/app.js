const prompt = require('prompt');
console.log("Entrez le calcul que vous voulez effectuer : ");
prompt.start();
prompt.get('calcul', function (err, result) {
    scanCalculate(result.calcul);
});

function scanCalculate(calculate) {
    const operators = ["+","-", "*","/", "%"];
    const length = calculate.length;
    let char;
    let operators_with_index = [];
    for (let i = 0; i < length; i++) {
        if (operators.includes(calculate[i])) {
            operators_with_index.concat([calculate[i],calculate.indexOf(calculate[i])])
            console.log("index de l'operator : " + calculate[i])
        }
    }
}