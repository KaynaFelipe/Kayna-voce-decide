const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
  {
    enunciado: "pergunta 1",
    alternativas: [
      "resposta 1",
      "resposta 2"
    ]
  },

  {
    enunciado: "pergunta 2",
    alternativas: [
      "resposta 1",
      "resposta 2"
    ]
  },

  {
    enunciado: "pergunta 3",
    alternativas: [
      "resposta 1",
      "resposta 2"
    ]
  },

  {
    enunciado: "pergunta 4",
    alternativas: [
      "resposta 1",
      "resposta 2"
    ]
  },

  {
    enunciado: "pergunta 5",
    alternativas: [
      "resposta 1",
      "resposta 2"
    ]
  }

];

let atual = 0;
let perguntaAtual;

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  mostraAlternativas();
}

mostraPergunta();