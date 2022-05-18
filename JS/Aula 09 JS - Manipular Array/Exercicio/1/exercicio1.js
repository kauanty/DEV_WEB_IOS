const i = [17, 43, 8, 4, 97, 56, 29]

let c = i.filter((valor) =>{
    return valor <= 18;
}) 

console.log(c)

resultado = i.forEach((valorFinal) =>{
    if (valorFinal % 2 == 1){
        console.log(`O numero ${valorFinal} é impar`)
    } 

    if (valorFinal % 2 == 0){
        console.log(`O numero ${valorFinal} é par`)
    } 
    
})