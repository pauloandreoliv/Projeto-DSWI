const titulo = document.getElementById("titulo");
const logadoAdmin = localStorage.getItem('logadoAdmin');

function alterarTitulo(){
    if (logadoAdmin == 'true') {
        var nome = localStorage.getItem('nomeAdmin');
        titulo.textContent = "Olá, " + nome;
    }
}

window.addEventListener('load', function() {
    alterarTitulo();
});

const sair = document.getElementById("sair_admin");

sair.addEventListener('click', (event) => {
	
  event.preventDefault();

  localStorage.clear();

  window.location.href = "admin_index.html";
});