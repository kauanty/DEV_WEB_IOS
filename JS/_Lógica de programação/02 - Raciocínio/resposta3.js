valor = 2000
imposto = 0.45
distribuidor = 0.28

var porcentagem = imposto + distribuidor

valorFinal = valor * porcentagem
valorCarro = valorFinal + valor

console.log(`O Custo do carro é ${valorCarro} reais`)