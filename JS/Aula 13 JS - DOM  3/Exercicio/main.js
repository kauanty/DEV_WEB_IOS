var botao1 = document.getElementById("z1");
botao1.addEventListener("click", dog);

function dog() {
  let imagem = document.createElement("img");
  imagem.src = "img/dog.jpg";
  document.body.style.backgroundColor = "#262525";
  document.body.insertBefore(imagem, botao1.nextElementSibling);
  imagem.style.width='30%'
  imagem.className='Excluir';
}

var botao2 = document.getElementById("z2");
botao2.addEventListener("click", nomeUsuario);

function nomeUsuario() {
  nomeUsuario = window.prompt("Escreva seu nome aqui");
  texto = document.createElement("p");
  texto.innerHTML = `${nomeUsuario} foi lambido pelo doguineo.`; 
  document.body.insertBefore(texto, botao2.nextElementSibling);
  texto.style.color = "green";
  texto.className='Excluir';
}

var botao3 = document.getElementById("z3");
botao3.addEventListener("click", usuarioTabuada);

function usuarioTabuada() {
  usuarioTabuada = window.prompt("Coloque um número por favor");
  for (let i = 1; i <= 10; i++) {
    tabua = document.createElement("p");
    tabua.innerText = `${usuarioTabuada} X ${i} = ${usuarioTabuada * i}`;
    document.body.insertBefore(tabua, botao3.nextElementSibling);
    tabua.style.color = "green";
    tabua.className='Excluir';
  }
  {
    if (isNaN(usuarioTabuada)) alert("Coloque um número");
    return;
  }
}

var botao4 = document.getElementById('z4');
botao4.addEventListener('click', removerElemento);
function removerElemento(){
    var lista = document.getElementsByClassName('Excluir')
    for (var i = lista.length-1;i >= 0; i--){
        lista[i].remove();
    }
    document.body.style.backgroundColor='#121212'
}
