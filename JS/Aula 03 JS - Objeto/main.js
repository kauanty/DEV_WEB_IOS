//Estrutura de função
/*

funcion NomeDaFuncao (valor1,valor2){
    return valor1 * valor2 
}
*/

//funcoes
function AddNums(num1 = 2, num2 = 5) {
  return num1 + num2;
}

// console.log(AddNums());

let x = AddNums(10, 11);
console.log(x);

//Criando Arrow Function

const hello = (primeiro = 2, segundo = 2) => {
  return primeiro * segundo;
};

//retornar o resultado da função
console.log(hello());

const somaAddNums = (num1 = 2, num2 = 5) => {
  return num1 + num2;
};

//Criando Objetos

const aluno = {
  primeiroNome: "Mateus",
  SegundoNome: "lost",
  Idade: "19",
};

console.clear();

//Evento onload = mostrar conteudo enquanto carrega pagina (loading)
const boasVindas = () => {
  alert("Bem vindo a nossa página otario");
  console.log("Bem a nossa página otário");
};

function eventClick(){
    console.log('Você clicou aqui otario')
}
