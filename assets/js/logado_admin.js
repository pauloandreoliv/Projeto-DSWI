const titulo = document.getElementById("titulo");
const logadoAdmin = localStorage.getItem('logadoAdmin');

function redirecionar(){
    if (logadoAdmin == null) {
        var caminho = window.location.pathname;
  
        if (caminho == "/Projeto-DSWI/admin_index.html" || caminho == "/Projeto-DSWI/admin_adicionar.html" || caminho == "/Projeto-DSWI/admin_cardapio.html" || caminho == "/Projeto-DSWI/admin_pedidos.html" || caminho == "/Projeto-DSWI/admin_promocoes.html" || caminho == "/Projeto-DSWI/admin_verpromocoes.html"){
            window.location.href = "admin.html";
        }
    }
}

function alterarTitulo(){
    if (logadoAdmin == 'true') {
        var nome = localStorage.getItem('nomeAdmin');
        titulo.textContent = "Olá, " + nome;
    }
}

window.addEventListener('load', function() {
    redirecionar();
    var caminho = window.location.pathname;
    if (caminho == "/Projeto-DSWI/admin_index.html"){
        alterarTitulo();
    }
});

const sair = document.getElementById("sair_admin");

sair.addEventListener('click', (event) => {
	
  event.preventDefault();

  localStorage.clear();

  window.location.href = "admin.html";
});