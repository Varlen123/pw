function Dirigir(idade, habilitacao){
    if(idade >= 18 && habilitacao == true){
        console.log("Pode dirigir")
    } else {
        console.log("Não pode")
    }
}
console.log(Dirigir(35, true))