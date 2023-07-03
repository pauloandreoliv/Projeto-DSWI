import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { mostrarPopup, mostrarPopupString } from "./popup.js";

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

const entrarButton = document.getElementById("botao_enviar");

entrarButton.addEventListener('click', (event) => {

    event.preventDefault();
  
    const inputCPF = document.querySelector('#inputcpf').value;
    const inputSenha = document.querySelector('#inputsenha').value;

    const usuariosRef = ref(database, 'usuarios');
    const query = orderByChild(usuariosRef, 'cpf').equalTo(inputCPF);
  
    get(query)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usuarios = snapshot.val();
          const usuario = Object.values(usuarios)[0];
          const senha = usuario.senha;
          if (inputSenha === senha) {
            mostrarPopupString('Login realizado');
          } else {
            mostrarPopupString('Senha incorreta');
          }
        } else {
          mostrarPopupString('Usuário inexistente');
        }
      })
      .catch((error) => {
        mostrarPopup(error);
      });
  });