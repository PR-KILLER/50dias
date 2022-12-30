function sun(a, b) {
    return a + b;
}
const sunArrow = (a, b = 10) => {
    return a + b;
}

const sunArrow2 = (a, b = 10) => a + b;

const sunValue = sunArrow2(2);

console.log(sunValue);