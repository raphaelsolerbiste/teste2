document.getElementById('quiz-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const respostas = document.querySelectorAll('input[type="radio"]:checked');
  let acertos = 0;
  respostas.forEach(resposta => {
    acertos += parseInt(resposta.value);
  });
  const total = 5;
  const percentual = Math.round((acertos / total) * 100);
  document.getElementById('resultado').innerHTML = `
    <h2>Resultado</h2>
    <p>Você acertou ${acertos} de ${total} perguntas (${percentual}%)</p>
  `;
});