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
  const inputCPF = document.querySelector('#inputcpf').value;
  const inputEndereco = document.querySelector('#inputendereco').value;
  const inputTelefone = document.querySelector('#inputtelefone').value;
  const inputEmail = document.querySelector('#inputemail').value;
  const inputSenha = document.querySelector('#inputsenha').value;
  
  try {
    if (inputNome == null || !inputNome.match(/^[\p{L}\s]+$/)) {
      throw new Error("O nome deve conter apenas letras.");
    } else if(inputCPF == null || !inputCPF.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
      throw new error("O CPF deve seguir o formato 000.000.000-00");
    } (inputTelefone == null || !inputTelefone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
      throw new Error("O telefone deve estar no formato (00) 90000-0000.");
    } (inputEmail == null || !inputEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      throw new Error("O e-mail deve seguir o formato padrão.");
    } (inputSenha == null || !inputSenha.match(/^.{8,}$/)) {
      throw new Error("A senha deve conter no mínimo 8 caracters.");
    } else {
      const dados = {
        nome: inputNome,
        cpf: inputCPF,
        endereco: inputEndereco,
        telefone: inputTelefone,
        email: inputEmail,
        senha: inputSenha
      };
    
      const databaseRef = ref(database, 'usuarios');
    
      push(databaseRef, dados)
      .then(() => {
        mostrarPopup('Cadastrado com sucesso');
      })
      .catch((error) => {
        mostrarPopup(error.message);
      });
    }
  } catch (error) {
    mostrarPopup(error.message);
  }
});