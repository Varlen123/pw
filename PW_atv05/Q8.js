function primo (n1){
    if (n1 <=1){
        return false
}
for (let x =2;x<= Math.sqrt(n1);x++){
    if (n1 % x === 0){
return false
    }

return true


}}
console.log(primo(5))