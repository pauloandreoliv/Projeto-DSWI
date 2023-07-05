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

const databaseRef = ref(database, 'usuarios');

const entrarButton = document.getElementById("botao_enviar");

entrarButton.addEventListener('click', (event) => {
	
  event.preventDefault();

  const inputCpf = document.querySelector('#inputcpf').value;
  const inputSenha = document.querySelector('#inputsenha').value;
  
  onValue(databaseRef, (snapshot) => {
    
    const usuarios = snapshot.val();
    
    for (const usuario in usuarios) {

        const dadosUsuario = usuarios[usuario];
        const cpf = dadosUsuario.cpf;

        if (cpf === inputCpf) {
            const senha = dadosUsuario.senha;
            if (senha === inputSenha) {
                mostrarPopup("Logado com sucesso");
            } else {
                mostrarPopup("Senha incorreta");
            }
        } else {
            mostrarPopup("Usuário inexistente");
        }
    }
  });
});
