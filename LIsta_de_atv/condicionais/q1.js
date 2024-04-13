function votar(anoAtual, anoNascimento) {
    if (anoAtual - anoNascimento < 16) {
        console.log("Voto negado")
        console.log("Voto opcional")
    } else {
        console.log("Voto obrigatório")
    }
}
console.log(votar(2020, 2000))