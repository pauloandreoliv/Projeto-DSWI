import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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

const cadastrarButton = document.getElementById("botao_enviar");

cadastrarButton.addEventListener('click', (event) => {
	
  event.preventDefault();

  const inputNome = document.querySelector('#inputnome').value;
  const inputValor = document.querySelector('#inputvalor').value;
  const inputUrl = document.querySelector('#inputurl').value;

  const dados = {
    nome: inputNome,
    url: inputUrl,
    valor: inputValor
  };

  const databaseRef = ref(database, 'pratos');

  push(databaseRef, dados)
	.then(() => {
	console.log('Inserção realizada com sucesso!');
  })
  .catch((error) => {
	mostrarPopup(error);
  });
});