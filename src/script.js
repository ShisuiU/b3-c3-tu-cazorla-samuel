function btm(val) {
    document.getElementById("calc-output").innerHTML += val;
}
function btmOpenPar() {
    document.getElementById("calc-output").innerHTML += "(";
}
function btmClosePar() {
    document.getElementById("calc-output").innerHTML += ")";
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
function btmPercent() {
    document.getElementById("calc-output").innerHTML += "%";
}
function btmEgal() {
    showCalc(document.getElementById("calc-output").innerHTML);
}

function showCalc(calculate) {
    document.getElementById("calc-output").innerHTML = calc(calculate);
}

function calc(calculate) {
    return new Function('return ' + calculate)();
}