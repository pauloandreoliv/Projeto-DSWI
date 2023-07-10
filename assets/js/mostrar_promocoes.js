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

const databaseRef = ref(database, 'promocoes');

function mostrar () {
    const mostrarPromocoes = document.getElementById('mostrarPromocoes');

    mostrarPromocoes.innerHTML = "";
    let contPromocao = 0;

    onValue(databaseRef, (snapshot) => {
    
        const promocoes = snapshot.val();

        for (const promocao in promocoes) {

            const dadosPromocao = promocoes[promocao];
            const preco = dadosPromocao.preco;
            const nome = dadosPromocao.nome;
            const url = dadosPromocao.url;

            var promocaoDiv = document.createElement('article')
            promocaoDiv.innerHTML = '<article class="box_produto">' +
                '<div class="topo">' +
                    '<div class="imagem" style="background-image: url(' + url + ');"></div>'+
                '</div>'+
                '<div class="info">'+
                    '<p>'+ nome + '</p>' +
                    '<h5> R$' + preco + '</h5>'+
                '</div>'+
            '</article>';
            promocaoDiv.id = promocao;

            mostrarPromocoes.appendChild(promocaoDiv);
            contPromocao ++;
        }
    });
}

window.addEventListener('load', (event) => {
    mostrar();
})