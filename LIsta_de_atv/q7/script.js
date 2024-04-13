function IMC() { 
       let peso = 70;
let altura = 1.70;
    const imc = peso / (altura * altura);
    console.log(imc);
}
if (IMC < 18.5) {
    console.log("abaixo do peso ideal.");
} else if (IMC < 24.9) {
    console.log("Seu peso está normal.");
} else if (IMC < 29.9) {
    console.log(" sobrepeso.");
} else if (IMC < 34.9) {
    console.log(" grau I.");
} else if (IMC < 39.9) {
    console.log("grau II.");
} else {
    console.log("obesidade mórbida.");
}

IMC();
