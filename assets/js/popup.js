//Fechar popup
let botao_close = document.getElementById("botao_close");
botao_close.onclick = esconderPopup;

function esconderPopup() {
    document.getElementById("popup").style.display = "none";
}

//Mostrar popup
function mostrarPopup(error) {
    document.getElementById("popup").style.display = "block";
	ocument.getElementById("popup").textContent = erro.message;
}

