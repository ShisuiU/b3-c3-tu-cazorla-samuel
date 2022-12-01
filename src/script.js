function btm(val) {
    document.getElementById("calc-output").innerHTML += val;
}
function btmClean() {
    document.getElementById("calc-output").innerHTML = "";
}
function btmPlus() {
    document.getElementById("calc-output").innerHTML += "+";
}
function btmLess() {
    document.getElementById("calc-output").innerHTML += "-";
}
function btmMultiply() {
    document.getElementById("calc-output").innerHTML += "*";
}
function btmDivision() {
    document.getElementById("calc-output").innerHTML += "/";
}
function btmEgal() {
    calc(document.getElementById("calc-output").innerHTML);
}

function calc(calculate) {
    let operatorsWithIndex = scanCalculate(calculate);
    console.log(operatorsWithIndex);
    let result = null;

    return result;
}

function scanCalculate(calculate) {
    const operators = ["+", "-", "*","/", "%"];
    const length = calculate.length;
    let operatorsWithIndex = [];

    for (let i = 0; i < length; i++) {
        if (operators.includes(calculate[i])) {
            operatorsWithIndex.push([null, calculate[i],null, i])
        }
    }

    let i = 0;
    let j = 0;

    operatorsWithIndex.forEach(occurence => {
        // Left part of the calculate
        operatorsWithIndex[i][0]= calculate.slice(j, occurence[3]);
        if (operatorsWithIndex[i+1] == undefined) {
            // Right part of the calculate
            operatorsWithIndex[i][2]= calculate.slice(parseInt(occurence[3]+1), calculate.length); 
        }
        else {
            // Right part of the calculate
            operatorsWithIndex[i][2]= calculate.slice(parseInt(occurence[3]+1), operatorsWithIndex[i+1][3]);
        }
        
        switch (occurence[0]) {
            case '+':
                calc = operatorsWithIndex[i][0] + operatorsWithIndex[i][2];
            case '-':
                calc = operatorsWithIndex[i][0] - operatorsWithIndex[i][2];
            case '*':
                calc = operatorsWithIndex[i][0] * operatorsWithIndex[i][2];
            case '/':
                calc = operatorsWithIndex[i][0] / operatorsWithIndex[i][2];
            // case '%':
        }

        i++;
        j = occurence[1]+1;
    })

    return operatorsWithIndex;
}