let n1 = parseFloat(prompt("digite um número"))
let n2 = parseFloat(prompt("digite outro número"))
let n3 = parseFloat(prompt("digite mais um número"))
const media = (n1 + n2 + n3) / 3
const soma = n1 + n2 + n3
const multiplicacao = n1 * n2 * n3
const menor = Math.min(n1, n2, n3)
const maior = Math.max(n1, n2, n3)

if (n1 === n2 || n1=== n3 || n2 === n3) {
    alert("Você repetiu")
}
else{
    alert("media: " + media.toFixed(2) + "\nsoma: " + soma + "\nmultiplicação: " + multiplicacao + "\nmenor: " + menor + "\nmaior: " + maior)
}