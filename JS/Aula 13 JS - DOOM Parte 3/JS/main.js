// Método querySelector
let paragrafo = document.querySelector("p");
paragrafo.style.background = "#FBBEBA";

// Busca a tag e a classe
let parClasse = (document.querySelector("p.exemplo").innerHTML ="Mudei o texto aqui");

// Busca somente a classe
let elemento = (document.querySelector(".myclass").style.fontSize = "x-large");

// Função chamada pelo evento onclick
const Clique = () => {
  document.querySelector("#my-span").style.backgroundColor = "green";
  document.querySelector("#my-span").style.color = "white";
};

// Método querySelectorAll
let listaLi = document.querySelectorAll("li");
for (i = 0; i < listaLi.length; i++) {
  listaLi[i].style.border = "10px solid red";
  listaLi[i].style.padding = "10px";
}
console.log(listaLi);

// Busca por id
let myLi = document.querySelectorAll("#my-li");
myLi.forEach((li) => (li.innerHTML = "Mudou aqui!"));

// Busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = 'orange'));

// Busca por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#FFF'));