// Metodo getElementById


let titulo = document.getElementById('titulo');

// alterando o conteudo do HMTL
titulo.innerHTML = 'Vai perder o PC galera do AWS';

// Configurando o CSS do HTML
titulo.style.textAlign = 'center';

titulo.style.backgroundColor = '#CCCCC9';

titulo.style.borderBottom = 'solid 3px #000';

titulo.style.margin = '20px';


let items = document.getElementsByClassName('item');
console.log(items);

console.log(items[1]);
items[1].textContent = 'OOOOOOOOOOOOOOO';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'red';
items[1].style.padding = '.5rem';

// Utiliza o FOR para percorrer a lista
for(let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'grey'
    // items[i].style.color = 'white'
}

//Metodo getElementsByTagName
let li = document.getElementsByTagName('li');
console.log(li);

for(let c =0; c < li.length; c+=2){
    li[c].style.backgroundColor = '#fcba03'
}

let nome = document.getElementsByName ('fitem')

console.clear();
console.log(nome)

nome[0].textContent = 'Pose de quebrada';
nome[0].style.backgroundColor = 'yellow';
nome[1].textContent = 'RECEBAA';
nome[1].style.backgroundColor = 'yellow';


//Remover Conteudo
let item2 = document.getElementById('item2');
item2.remove()

//Inserir um valor
let lista = document.getElementById('items');
let item1 = document.getElementById('item1');
lista.insertBefore(item2, item1.nextSibling)


//Alterar o estilo da lista
let ul = document.getElementById('items')
ul.style.listStyle = 'none';
ul.style.fontSize = '300%';
ul.style.textAlign = 'center';

// document.ul.appendChild('item1')

let teste =  document.getElementById('items');