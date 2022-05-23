const alunos = [
    {
        nome: 'Ana',
        idade: 17,
        nota: 8,
        ano: '2B'
    },
    {
        nome: 'Bruno',
        idade: 16,
        nota: 6,
        ano: '2C'
    },
    {
        nome: 'Veronica',
        idade: 16,
        nota: 9,
        ano: '2C'
    },
    {
        nome: 'Marta',
        idade: 15,
        nota: 5,
        ano: '3C'
    },
    {
        nome: 'Brenno',
        idade: 19,
        nota: 6,
        ano: '3C'
    },
    {
        nome: ' Maria',
        idade: 14,
        nota: 4,
        ano: '1F'
    },
]


//Retornando nome e ano dos alunos
const nomeAno = alunos.filter((alunos) => {
    console.log(`O aluno(a) ${alunos.nome} está no ${alunos.ano}`)
})

console.log('\n')

//Retornando alunos do segundo ano
i = alunos.filter((filtro) => {
    if(filtro.ano == '2C' || filtro.ano == '2B'){
        console.log(filtro)
    }
});

console.log('\n')

//Calculo da média dos alunos
calc = (alunos[0].nota + alunos[1].nota + alunos[2].nota + alunos[3].nota + alunos[4].nota + alunos[5].nota) / 6
if (calc >= 7){
    console.log('Os alunos estão acima da média')
}
else{
    console.log('Os alunos estão abaixo da média')
}