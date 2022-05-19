console.log(window);
// window.alert('Olá pessoa');


//Titulo da página
document.title = 'Exercicio JS ';
let b = document.createElement("body")
document.body.append(b)
let s = document.createElement("section");
document.body.appendChild(s);
let h = document.createElement('H1');
let p = document.createElement("p");

let a = document.createElement("article");

h.innerHTML = "Exercicio da Aula 11 JS";
p.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";

s.appendChild(h);
s.appendChild(p);

p.style.textAlign = 'center';
h.style.textAlign = 'center';
h.style.marginTop = '10%';