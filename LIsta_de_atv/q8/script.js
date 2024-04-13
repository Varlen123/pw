function IMC(peso, altura) {
    const imc = peso / (altura * altura);
    console.log("meu imc é:",imc.toFixed(2));
    switch (true) {
        case imc < 18.5:
            console.log('Você está abaixo do peso');
            break;
        case imc >= 18.5 && imc < 25:
            console.log('Seu peso está normal');
            break;
        case imc >= 25 && imc < 30:
            console.log('Você está com sobrepeso');
            break;
        case imc >= 30:
            console.log('Você está obeso');
            break;
        default:
            console.log('Resultado inválido');
    }
}
IMC(120, 1.75); 