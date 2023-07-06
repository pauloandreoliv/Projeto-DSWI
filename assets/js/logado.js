var logado = localStorage.getItem('logado');
var linkMenu = document.querySelector('#logado a');

function alterarMenu() {
    if (!(linkMenu === null)) {
        if (logado === 'true') {
            linkMenu.innerHTML = '<i class="fa-solid fa-user"></i> Sua conta';
            linkMenu.href = 'pedidos.html';
        } else {
            linkMenu.innerHTML = '<i class="fa-solid fa-right-to-bracket"></i> Entrar';
            linkMenu.href = 'entrar.html';
        }
    }
}

export { alterarMenu };