class Calculation {
    constructor(calculate) {
        this.calculate = calculate;
    }

    getResult() {
        return new Function('return ' + this.calculate)();
    }
}

export const Calc = Calculation;
