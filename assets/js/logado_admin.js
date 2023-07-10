const titulo = document.getElementById("titulo");
const logadoAdmin = localStorage.getItem('logadoAdmin');

function redirecionar(){
    if (!(logadoAdmin === 'true')) {
        var caminho = window.location.pathname;
  
        if (caminho == "/admin_index.html" || caminho == "/admin_adicionar.html" || caminho == "/admin_cardapio.html" || caminho == "/admin_pedidos.html" || caminho == "/admin_promocoes.html" || caminho == "/admin_verpromocoes.html"){
            window.location.href = "/admin.html";
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
    if (caminho == "/admin_index.html"){
        alterarTitulo();
    }
});

const sair = document.getElementById("sair_admin");

sair.addEventListener('click', (event) => {
	
  event.preventDefault();

  localStorage.clear();

  window.location.href = "admin.html";
});