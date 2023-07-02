import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

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

const cadastrarButton = document.querySelector('button[type="submit"]');

cadastrarButton.addEventListener('click', (event) => {
	
  event.preventDefault();

  const inputNome = document.querySelector('#inputnome').value;
  const inputCPF = document.querySelector('#inputcpf').value;
  const inputEndereco = document.querySelector('#inputendereco').value;
  const inputTelefone = document.querySelector('#inputtelefone').value;
  const inputEmail = document.querySelector('#inputemail').value;
  const inputSenha = document.querySelector('#inputsenha').value;

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
	console.log('Inserção realizada com sucesso!');
  })
  .catch((error) => {
	console.error('Erro ao realizar a inserção:', error);
  });
});