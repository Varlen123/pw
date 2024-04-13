function tabela(preco, parcela) {
    if (parcela === 1) {
 console.log("R$ " + (preco * 0.975) + " (1x)");
    } else if (parcela =2 && parcela <= 5) {
                console.log("R$ " + preco + " (" + parcela + "x)");
    } else if (parcela =6 && parcela <= 10) {
        console.log("R$ " + (preco * 1.06 / parcela) + " (" + parcela + "x)");
 } else if (parcela =11 && parcela <= 15) {
        console.log("R$ " + (preco * 1.13 / parcela) + " (" + parcela + "x)");
} else {
        console.log("Parcelas inválidas.");
    }
}

tabela(1000, 1);
