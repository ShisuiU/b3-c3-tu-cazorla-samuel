import {Calc} from '../src/app.js';
import {expect} from 'chai';

describe('Testing Calculation functions', function() {
    it('A Simple Calculation', function(done) {
        let c1 = new Calc(2+1);
        expect(c1.getResult()).to.equal(3);
        done();
    });

    it('A Double Calculation', function(done) {
        let c2 = new Calc(2-1+2);
        expect(c2.getResult()).to.equal(3);
        done();
    });

    it('A Mixed Calculation', function(done) {
        let c3 = new Calc(5*2-1);
        expect(c3.getResult()).to.equal(9);
        done();
    });

    it('A Calculation With Parenthesis', function(done) {
        let c4 = new Calc((9+6)*2);
        expect(c4.getResult()).to.equal(30);
        done();
    });

    it('An Awful Calculation', function(done) {
        let c5 = new Calc((9+6)*(5+5)/(2*2));
        expect(c5.getResult()).to.equal(37.5);
        done();
    });
});