function MMC(n1, n2){
    let numeros, x, y;
    x = n1;
    y = n2;
    while(numeros!=0){
      numeros = x % y;
      x = y;
      y = numeros;
    }
    return (n1*n2)/x;
  }
console.log(MMC(2, 23))