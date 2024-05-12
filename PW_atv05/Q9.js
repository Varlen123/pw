function inversa(palavra){
    
        return palavra.split("").map(x => x.toLowerCase()).join("").replace(/\s/g, "").split("").reverse().join("");
    

}
console.log(inversa("Savio fsf"))