const funcionarios = [
      {
        nome : "Fabricio",
        salario: 1200,
        vinculo : "PJ",
    },

      {
        nome : "Patatá",
        salario : 1800,
        vinculo : "PJ",
    },

      {
        nome : "Kauan",
        salario : 4354,
        vinculo : "CLT",
    },

     {
        nome : "Carlos",
        salario : 8100,
        vinculo : "CLT",
    },

     {
        nome : "Samuel",
        salario : 2077,
        vinculo : "PJ",
     },
    ];


const Inss = [
    [0, 1212, 0.075],  
    [1212, 2427, 0.09],  
    [2427, 3641, 0.12],  
    [3641, 7087, 0.14],  
];

//Funcionario Fabricio 

var valor = funcionarios[0].salario

if (funcionarios[0].vinculo == "PJ" ) {
    var inss = 0
}
if (valor > 1212) {
    var inss = 0.09 * valor
}
if (valor > 2427) {
    var inss = 0.12 * valor
}
 if (valor > 3641) {
    var inss = 0.14 * valor
}
else {
    var inss = 0.075 * valor
}

console.log(`O vinculo do ${funcionarios[0].nome} é ${funcionarios[0].vinculo}, e ele não paga INSS`)

//Funcionario Patatá

var valor = funcionarios[1].salario

if (funcionarios[1].vinculo == "PJ" ) {
    var inss = 0
}
if (valor > 1212) {
    var inss = 0.09 * valor
}
if (valor > 2427) {
    var inss = 0.12 * valor
}
 if (valor > 3641) {
    var inss = 0.14 * valor
}
else {
    var inss = 0.075 * valor
}

console.log(`O vinculo do ${funcionarios[1].nome} é ${funcionarios[1].vinculo}, e ele não paga INSS`)

//Funcionario Kauan

var valor = funcionarios[2].salario

if (funcionarios[2].vinculo == "PJ" ) {
    var inss = 0
}
if (valor > 1212) {
    var inss = 0.09 * valor
}
if (valor > 2427) {
    var inss = 0.12 * valor
}
 if (valor > 3641) {
    var inss = 0.14 * valor
}
else {
    var inss = 0.075 * valor
}

console.log(`O vinculo do ${funcionarios[2].nome} é ${funcionarios[2].vinculo}, e ele paga ${Math.trunc(inss)} reias de INSS`)

//Funcionario Carlos

var valor = funcionarios[3].salario

if (funcionarios[3].vinculo == "PJ" ) {
    var inss = 0
}
if (valor > 1212) {
    var inss = 0.09 * valor
}
if (valor > 2427) {
    var inss = 0.12 * valor
}
 if (valor > 3641) {
    var inss = 0.14 * valor
}
else {
    var inss = 0.075 * valor
}

console.log(`O vinculo do ${funcionarios[3].nome} é ${funcionarios[3].vinculo}, e ele paga ${Math.trunc(inss)} reias de INSS`)


//Funcionario Samuel

var valor = funcionarios[4].salario

if (funcionarios[4].vinculo == "PJ" ) {
    var inss = 0
}
if (valor > 1212) {
    var inss = 0.09 * valor
}
if (valor > 2427) {
    var inss = 0.12 * valor
}
 if (valor > 3641) {
    var inss = 0.14 * valor
}
else {
    var inss = 0.075 * valor
}

console.log(`O vinculo do ${funcionarios[4].nome} é ${funcionarios[4].vinculo}, e ele não paga INSS`)