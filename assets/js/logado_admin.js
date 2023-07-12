const titulo = document.getElementById("titulo");
const nomeDia = document.getElementById("nome_dia");
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

function inserirData() {
    var data = new Date();
    var nomesDosDias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    var dia = nomesDosDias[data.getDay()];
    nomeDia.textContent = dia;
}

window.addEventListener('load', function() {
    redirecionar();
    var caminho = window.location.pathname;
    if (caminho == "/Projeto-DSWI/admin_index.html"){
        alterarTitulo();
        inserirData();
    }
});

const sair = document.getElementById("sair_admin");
sair.addEventListener('click', (event) => {
	
  event.preventDefault();

  localStorage.clear();

  window.location.href = "admin.html";
});

const sairnormal = document.getElementById("sair_admin_normal");
sairnormal.addEventListener('click', (event) => {
	
  event.preventDefault();

  localStorage.clear();

  window.location.href = "admin.html";
});