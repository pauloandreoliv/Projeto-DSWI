//Adiciona responsividade do menu
let menuAberto = false;
let botao_menu = document.getElementById("botao_menu");
botao_menu.onclick = addMobile;

function addMobile() {
  if (menuAberto === false) {
    menuAberto = true;
    document.getElementById("normal").style.display = "flex";
  } else {
    menuAberto = false;
    document.getElementById("normal").style.display = "none";
  }
}

//Retira versão mobile do menu
let larguraAnterior = window.innerWidth;
window.addEventListener("resize", removerMobile);
function removerMobile() {
  const larguraAtual = window.innerWidth;
  if (larguraAtual > 768) {
    document.getElementById("normal").style.display = "flex";
  } else {
    document.getElementById("normal").style.display = "none";
  }

  larguraAnterior = larguraAtual;
}


//Palavra da tela inicial
const palavras = ["conceito", "sabor", "estilo"];
const tempoDigitacao = 210;
let palavraAtual = 0;
let caractereAtual = 0;
let animacaoSpan = document.getElementById("animacaoSpan");

function animarPalavra() {
  if (caractereAtual < palavras[palavraAtual].length) {
    animacaoSpan.textContent += palavras[palavraAtual].charAt(caractereAtual);
    caractereAtual++;
    setTimeout(animarPalavra, tempoDigitacao);
  } else {
    setTimeout(apagarPalavra, tempoDigitacao * 2);
  }
}

function apagarPalavra() {
  if (caractereAtual >= 0) {
    animacaoSpan.textContent = animacaoSpan.textContent.slice(0, -1);
    caractereAtual--;
    setTimeout(apagarPalavra, tempoDigitacao);
  } else {
    palavraAtual = (palavraAtual + 1) % palavras.length;
    setTimeout(animarPalavra, tempoDigitacao);
  }
}

animarPalavra();