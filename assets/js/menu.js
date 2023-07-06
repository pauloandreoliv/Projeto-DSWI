import { alterarMenu } from "./logado.js";

alterarMenu();

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
