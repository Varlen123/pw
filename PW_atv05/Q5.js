let contar = 0;
function palavra() {
    let palavra = "aracoiába";
    const vogais = ["a", "e", "i", "o", "u"];
    for (let x of palavra.toLowerCase()) {
        if (vogais.includes(x)) {
            contar++;
        }
    }}
palavra();
console.log(contar);