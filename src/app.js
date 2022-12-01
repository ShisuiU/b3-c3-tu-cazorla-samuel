const prompt = require('prompt');
console.log("Entrez le calcul que vous voulez effectuer : ");
prompt.start();
prompt.get('calcul', function (err, result) {
    let calculate = result.calcul;
    let operatorsWithIndex = scanCalculate(calculate);
    let i = 0;
    let j = 0;
    operatorsWithIndex.forEach(occurencie => {
        console.log("occurencie : " + operatorsWithIndex[i+1][1]);
        // let leftPart= calculate.slice(j, occurencie[1]);
        // let rightPart= calculate.slice(parseInt(occurencie[1]+1), operatorsWithIndex[i+1][1])
        // console.log("leftPart= " + leftPart);
        // console.log("rightPart= " + rightPart);
        // switch (occurencie[0]) {
        //     case '+':
        //
        //     case '-':
        //
        //     case '*':
        //
        //     case '/':
        //
        //     case '%':
        // }
        i++;
        j = occurencie[1]+1;
    })
});

