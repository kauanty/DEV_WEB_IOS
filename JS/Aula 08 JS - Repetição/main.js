// while de 0 a 10
let contador = 1;
while (contador <= 10) {
  console.log(`Valor  do contador é?= ${contador}`);
  contador++;
}

//Decremento de 10 a 0
console.clear();
let cont2 = 10;
while (cont2 >= 0) {
  console.log(`O número do contador 2 é ${cont2} `);
  cont2--;
}

//laço for
for (let profHelo1 = 1; profHelo1 <= 5; profHelo1++) {
  console.log("Olá Jackass");
}

//Decremento de 10 a 0
console.clear();
let cont3 = 10;
while (cont3 >= 0) {
  console.log(`${cont3} `);
  cont3--;
}

//laços de repetição e Array
const frutas = ["maca", "laranja", "pera", 10];

for (let j = 0; j < frutas.length; j++) {
  console.log(`Nome: ${frutas[j]} `);
}

//Exercicio em sala

//Crie um array chamado carros com 8 carros e percorra o array
//de 2 em 2 exibindo os carros do array

const carros = [
  "Celta",
  "Corsa",
  "Camaro",
  "Cullian",
  "Cayenne",
  "HB20",
  "IX35",
  "Del Ray",
];
for (let c = 0; c < carros.length; c += 2) {
  console.log(`Carro: ${carros[c]} `);
}

// Array de objetos e laços
console.clear();
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false,
  },
];
// For overloop
for (let t of todos) {
  console.log(t);
  console.log(t.text);
  console.log(t.id);
}
