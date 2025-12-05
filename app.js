// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const dolarEur = (1/1.07);

function fromDollarToYen(dolar) {
    return dolar * dolarEur * oneEuroIs['JPY'];
}

function fromEuroToDollar(euro) {
    return euro * oneEuroIs['USD'];
}

function fromYenToPound(yen) {
    return (yen / oneEuroIs['JPY']) * oneEuroIs['GBP'];
}


module.exports = {
  oneEuroIs,
  dolarEur,
  fromDollarToYen,
  fromEuroToDollar,
  fromYenToPound
};