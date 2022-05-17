// Metodos forEach com Arrays
const frutas = ['Maca', 'Pera', 'Melancia'];
frutas.forEach(p);

function p(index, item){
    console.log(`Elemento ${item}`);
    console.log(`Indice ${index}`);
}



//Com Arrow function
const frutas2 = ['Maca', 'Pera', 'Melancia'];
frutas2.forEach((index, item) => {
    
    console.log(`Elemento ${item}`);
    console.log(`Indice ${index}`);

})



// Metodo forEach com Array de objetos
//Forma mais enxuta de escrever funções
const tarefas = [
    {
        id:1,
        texto: 'Aqui vai o texto um'
    },

    {
        id:2,
        texto: 'Aqui vai o texto dois'
    },
    
    {
        id:3,
        texto: 'Aqui vai o texto três'
    }
];

tarefas.forEach((teste) => console.log(teste.texto))



//Metodo map
const numeros = [16, 4, 9, 25];
const newArray = numeros.map(Math.sqrt);

console.log('Array antigo');
console.log(numeros);
console.log('Novo Array');
console.log(newArray);


//Outro exemplo de map
const mapText = tarefas.map((valor) =>{
    return valor.texto
})

console.log(mapText);



//Metodo Filter()
const idade = [32, 15, 8, 98, 70]

let filtroIdade = idade.filter((idades) =>{
    return idades >= 18;
})
console.log(filtroIdade)



//Metos find()
const meuArray = [
    {nome:'Diego', idade: 12, altura: 120, sexo: 'masculino'},
    {nome:'Jissara', idade: 15, altura: 170, sexo: 'feminino'},
    {nome:'Jheniffer', idade: 70, altura: 180, sexo: 'feminino'},
]

console.log(
    meuArray.find((genero) => {
        return genero.sexo === 'feminino';
    })
)


//Crie um array de objetos com quatro objetos
// e cada objeto terá 4 propriedades

// Retorne o nome de todos os alunos 
// Retorne todos os alunos que tirou nota maior que 6
// Retorne o primeiro aluno que tirou nota menor que 5

// Utilize em todos os retornos Arrow Function

const alunos = [
    {
    nome: 'Cirilo',
    idade: '15',
    altura: '140',
    carro: 'Fiorino',
    },
    {
    nome: 'Juvenaldo',
    idade: '22',
    altura: '160',
    carro: 'Mercedes-Benz',
    },
    {
    nome: 'Shopee',
    idade: '24',
    altura: '145',
    carro: 'Impala',
    },
    {
    nome: 'Snapchat',
    idade: '14',
    altura: '124',
    carro: '350z',
    },
];

