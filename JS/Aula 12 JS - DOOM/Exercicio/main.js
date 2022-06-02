let botao = document.getElementsByClassName("B_12");
botao[0].style.border = "2px solid #D9BC66";
botao[0].style.padding = ".5rem";
botao[0].style.backgroundColor = "#BFBFBF";
botao[0].style.margin = ".7rem";

botao[1].style.border = "2px solid #D9BC66";
botao[1].style.padding = ".5rem";
botao[1].style.backgroundColor = "#BFBFBF";
botao[1].style.margin = ".7rem";

botao[2].style.border = "2px solid #D9BC66";
botao[2].style.padding = ".5rem";
botao[2].style.backgroundColor = "#BFBFBF";
botao[2].style.margin = ".7rem";

var botao1 = document.getElementById("B_01");
botao1.addEventListener("click", umbrellaAcademy);

function umbrellaAcademy() {
  let imagem = document.createElement("img");
  imagem.src = "img/ua.jpg";
  document.body.style.backgroundColor = "#262525";
  document.body.insertBefore(imagem, botao1.nextElementSibling);
}

var botao2 = document.getElementById("B_02");
botao2.addEventListener("click", nomeUsuario);

function nomeUsuario() {
  nomeUsuario = window.prompt("Escreva seu nome aqui");
  texto = document.createElement("p");
  texto.innerHTML = `Olá ${nomeUsuario}, Seja bem vindo(a) à nossa academia.`; 
  document.body.insertBefore(texto, botao2.nextElementSibling);
  texto.style.color = "red";
}

var botao3 = document.getElementById("B_03");
botao3.addEventListener("click", usuarioTabuada);

function usuarioTabuada() {
  usuarioTabuada = window.prompt("Coloque um número por favor");
  for (let i = 1; i <= 10; i++) {
    tabua = document.createElement("p");
    tabua.innerText = `${usuarioTabuada} X ${i} = ${usuarioTabuada * i}`;
    document.body.insertBefore(tabua, botao3.nextElementSibling);
    tabua.style.color = "red";
  }
  {
    if (isNaN(usuarioTabuada)) alert("Coloque um número");
    return;
  }
}
