function c (f){
    let c = 1 
    while (c <= 10){
        let valorFinal = c * f
        console.log(`${f} X ${c} = ${valorFinal}`)
        c ++;
    }
}
c (2);

console.log('\n');

for(i = 0; i <= 10; i++){
    f = 5
    console.log(`${f} x ${i} = ${f * i}`);
}