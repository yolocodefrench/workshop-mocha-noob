var expect = require('chai').expect;

var lib=require('../src/shop-tools.js')

describe("getPrices",function(){
    var products=lib.getPrices();

    it(`sould be equal to {
        banana: 1,
        potato: 2,
        tomato: 3,
        cucumber: 4,
        salad: 5,
        apple: 6 }`, function() {
        expect(products).to.eql({
            banana: 1,
            potato: 2,
            tomato: 3,
            cucumber: 4,
            salad: 5,
            apple: 6 });
    })
        
});