// declaramos una funcion con el mismo nombre "formEuroToDollar"
// one euro is:
let oneEuroIs = {
    "JPY": 128.3, // japan yen
    "USD": 1.35, // us dollar
    "GBP": 0.9, // british pound
}

function fromDollarToYen(dollar){
    var yenes = (dollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
        return yenes;
}

function fromEuroToDollar(euro){
    var dollar1 = euro * oneEuroIs["USD"];
        return dollar1;
}

function fromYenToPound(yen){
    let euro = (yen / oneEuroIs.JPY); //yen a euros
     let conver = euro * oneEuroIs.GBP;
        return conver;
}

console.log(fromDollarToYen(150));
console.log(fromEuroToDollar(150));
console.log(fromYenToPound(1279));
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar }