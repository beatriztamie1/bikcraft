//perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const perguntas = event.currentTarget;
  const controls = perguntas.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativas");

  const ativas = resposta.classList.contains("ativas");
  console.log(ativas);
  perguntas.setAttribute("aria-expanded", "true");
}

function eventosPerguntas(perguntas) {
  perguntas.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
console.log(pergunta1);
