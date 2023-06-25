let menuAberto = false;
let botao_menu = document.getElementById("botao_menu");
botao_menu.onclick = controlarMenu;

function controlarMenu() {
  if (menuAberto === false) {
    menuAberto = true;
    document.getElementById("normal").style.display = "flex";
  } else {
    menuAberto = false;
    document.getElementById("normal").style.display = "none";
  }
}


let larguraAnterior = window.innerWidth;
window.addEventListener("resize", ajustarEstilo);
function ajustarEstilo() {
  const larguraAtual = window.innerWidth;
  if (larguraAtual > 768) {
    document.getElementById("normal").style.display = "flex";
  } else {
    document.getElementById("normal").style.display = "none";
  }

  larguraAnterior = larguraAtual;
}
