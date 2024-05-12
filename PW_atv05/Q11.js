function MDC(n1, n2){
    if(n1 == n2){
        return n1
    }else if(n1 > n2){
        return MDC(n1 - n2, n2)
    }else{
        return MDC(n1, n2 - n1)
    }
}
console.log(MDC(8, 23))