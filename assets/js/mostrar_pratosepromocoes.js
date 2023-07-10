import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { mostrarPopup } from "./popup.js";

const firebaseConfig = {
    apiKey: "AIzaSyAwhBCw983no7qVBlsO7_Dr6YwVDj-wROg",
    authDomain: "desenvolvimentoweb1-7361f.firebaseapp.com",
    projectId: "desenvolvimentoweb1-7361f",
    storageBucket: "desenvolvimentoweb1-7361f.appspot.com",
    messagingSenderId: "346518758393",
    appId: "1:346518758393:web:a97b06e672ddcf37881328",
    databaseURL: "https://desenvolvimentoweb1-7361f-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);



function mostrarPromocoes () {
    var tentouBuscar = false;

    const databaseRef = ref(database, 'promocoes');

    const mostrarPromocoes = document.getElementById('mostrarPromocoes');

    mostrarPromocoes.innerHTML = "";
    let contPromocao = 0;

    onValue(databaseRef, (snapshot) => {
    
        const promocoes = snapshot.val();

        for (const promocao in promocoes) {

            const dadosPromocao = promocoes[promocao];
            const valor = dadosPromocao.valor;
            const nome = dadosPromocao.nome;
            const url = dadosPromocao.url;

            var promocaoDiv = document.createElement('article')
            promocaoDiv.innerHTML = '<article class="box_produto">' +
                '<div class="topo">' +
                    '<div class="imagem" style="background-image: url(' + url + ');"></div>'+
                '</div>'+
                '<div class="info">'+
                    '<p>'+ nome + '</p>' +
                    '<h5> R$' + valor + '</h5>'+
                '</div>'+
            '</article>';
            promocaoDiv.id = promocao;

            mostrarPromocoes.appendChild(promocaoDiv);
            contPromocao ++;
            tentouBuscar = true;
        }
    });

    if (contPromocao == 0) {
        mostrarPromocoes.innerHTML = "";
        mostrarPromocoes.textContent = "Sem promoções disponíveis.";
    }
}

function mostrarPratos () {
    var tentouBuscar = false;

    const databaseRef = ref(database, 'pratos');
    
    const mostrarPratos = document.getElementById('mostrarPratos');

    mostrarPratos.innerHTML = "";
    let contPrato = 0;

    onValue(databaseRef, (snapshot) => {
    
        const pratos = snapshot.val();

        for (const prato in pratos) {

            const dadosPrato = pratos[prato];
            const valor = dadosPrato.valor;
            const nome = dadosPrato.nome;
            const url = dadosPrato.url;

            var pratoDiv = document.createElement('article')
            pratoDiv.innerHTML = '<article class="box_produto">' +
                '<div class="topo">' +
                    '<div class="imagem" style="background-image: url(' + url + ');"></div>'+
                '</div>'+
                '<div class="info">'+
                    '<p>'+ nome + '</p>' +
                    '<h5> R$' + valor + '</h5>'+
                '</div>'+
            '</article>';
            pratoDiv.id = prato;

            mostrarPratos.appendChild(pratoDiv);
            contPrato ++;
            tentouBuscar = true;
        }
    });

    if (contPrato == 0) {
        mostrarPratos.innerHTML = "";
        mostrarPratos.textContent = "Sem pratos disponíveis.";
    }
}

window.addEventListener('load', (event) => {
    var caminho = window.location.pathname;
  
    if (caminho == "/Projeto-DSWI/cardapio.html"){
        mostrarPratos()
    } else {
        mostrarPromocoes();
    }
})