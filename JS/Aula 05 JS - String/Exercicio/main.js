leroLero = 'Dr Stephen Strange lança um feitiço proibido que abre um portal para o multiverso. No entanto, surge uma ameaça que pode ser grande demais para sua equipe lidar.'

//Acessar a primeira posição
console.log('Acessar a primeira posição')
console.log(leroLero.charAt(0));
console.log('\n')

//tamanho da string
console.log('Exbir tamanho da string')
console.log(leroLero.length);
console.log('\n')

//Trocando a frase Dr.. por Feiticeira Escarlate
console.log('Trocando a frase Dr Stephen Strange por Feiticeira Escarlate')
feiticeira = leroLero.replace('Dr Stephen Strange', 'Feiticeira Escarlate');
console.log(feiticeira);
console.log('\n')

//console.log na palavra multiverso
console.log('Buscando a palavra multiverso na string')
feiticeira2 = leroLero.split(' ');
console.log(feiticeira2[13]);

console.log('\n')

//Deixando toda a string em caixa alta
console.log('Todo o texto em caixa alta')
console.log(leroLero.toUpperCase());