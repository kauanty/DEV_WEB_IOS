const funcionarios = {
    pessoa1 : {
        nome : "Fabricio",
        salario: 1200,
        vinculo : "PJ",
    },

    pessoa2 : {
        nome : "Patatá",
        salario : 1800,
        vinculo : "PJ",
    },

    pessoa3 : {
        nome : "Kauan",
        salario : 4354,
        vinculo : "CLT",
    },

    pessoa4 : {
        nome : "Carlos",
        salario : 8100,
        vinculo : "CLT",
    },

    pessoa5 : {
        nome : "Samuel",
        salario : 2077,
        vinculo : "PJ",
    },
}

calculo = (funcionarios.pessoa1.salario * 0.09);
console.log(calculo)