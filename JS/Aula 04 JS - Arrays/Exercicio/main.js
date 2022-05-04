var convidados = new Array('Joaquim', 'José', 'Silva', 'Xavier');
console.log (convidados);

//  ~ ~ ~ Entra Amanda na festa ~ ~ ~

convidados.unshift('Amanda');
console.log(convidados);

//  ~ ~ ~ Saiu Xavier  ~ ~ ~
convidados.pop();
console.log(convidados);

//  ~ ~ ~ Chegou Zuleica  ~ ~ ~

convidados.push('Zuleica');
console.log(convidados);

//  ~ ~ ~ Saiu Silva  ~ ~ ~

delete convidados[3];
console.log(convidados)

//  ~ ~ ~ Entra Silvana  ~ ~ ~

convidados [3] = "Silvana";
console.log (convidados)

//  ~ ~ ~ Sai Amanda  ~ ~ ~

convidados.shift()
console.log(convidados)

var convidadosString = convidados.join ('-')
console.log (convidadosString)