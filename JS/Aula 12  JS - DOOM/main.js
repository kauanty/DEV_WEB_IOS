// Metodo getElementById


let titulo = document.getElementById('titulo');

// alterando o conteudo do HMTL
titulo.innerHTML = 'Vai perder o PC galera do AWS';

// Configurando o CSS do HTML
titulo.style.textAlign = 'center';
titulo.style.backgroundColor = '#CCCCC9';
titulo.style.borderBottom = 'solid 3px #000';
titulo.style.margin = '20px';


let items = document.getElementById('item');
console.log(items);

console.log(items[1]);