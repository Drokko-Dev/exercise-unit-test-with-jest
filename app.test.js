test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;

    expect(dollars).toBe(expected); 
})

test("One dolar should be (156.5/1.07) yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = 1 * (156.5/1.07);

    expect(yen).toBe(expected);
})

test("One yen should be (0.87/156.5) pound", function() {
    const { fromYenToPound } = require('./app.js');
    const pound = fromYenToPound(2);
    const expected = (2 /156.5) * 0.87;

    expect(pound).toBe(expected); 
})