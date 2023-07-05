//Fechar popup
let botao_close = document.getElementById("botao_close");
botao_close.onclick = esconderPopup;

function esconderPopup() {
    document.getElementById("popup").style.display = "none";
}

//Mostrar popup
function mostrarPopup(erro) {
    document.getElementById("popup").style.display = "block";
	ocument.getElementById("popup").textContent = erro;
}

export { mostrarPopup };