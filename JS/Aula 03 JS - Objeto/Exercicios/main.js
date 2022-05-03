alert('Descubra o botão correto!');


const alertErrado = () => {
    alert("Você escolheu o errado, tente novamente!");
    console.log("Você escolheu o errado, tente novamente!");
};

const alertCorreto = () => {
setTimeout(function () {
    alert('🥳 Ebaaa 🎉');
}, 2300);
}

document.querySelector(".conf").addEventListener("click", function (e) {
    party.confetti(this);
});

party.confetti(runButton, {
	count: party.variation.range(10, 20),
});
