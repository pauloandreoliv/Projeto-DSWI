import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue, remove } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
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

function remover() {
    var key = localStorage.getItem('key');
    const usuario = ref(database, 'usuarios/' + key);

    remove(usuario)
      .then(() => {
        try{
            inserir();
        } catch (error) {
            mostrarPopup("Erro. Tente novamente.");
        }
      })
      .catch((error) => {
        mostrarPopup("Erro. Tente novamente.");
      });
}

function inserir () {
    const inputNome = localStorage.getItem('nome');
    const inputCPF = localStorage.getItem('cpf');
    const inputEndereco = document.forms["configuracoes"]["inputendereco"].value;
    const inputTelefone = document.forms["configuracoes"]["inputtelefone"].value;
    const inputEmail = document.forms["configuracoes"]["inputemail"].value;
    const inputSenha = document.forms["configuracoes"]["inputsenha"].value;
    
    try {
        if (inputNome.length === 0 || inputNome == null || inputNome == undefined || !inputNome.match(/^[a-zA-Z\s]+$/)) {
        throw new Error("O nome deve conter apenas letras sem acentos.");
        } else if(inputCPF.length === 0 || inputCPF == null || inputCPF == undefined || !inputCPF.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
        throw new Error("O CPF deve seguir o formato 000.000.000-00");
        } else if (inputEndereco.length === 0 || inputEndereco == null || inputEndereco == undefined) {
        throw new Error("O endereço não pode estar vazio.");
        } else if(inputTelefone.length === 0 || inputTelefone == null || inputTelefone == undefined || !inputTelefone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
        throw new Error("O telefone deve estar no formato (00) 90000-0000.");
        } else if(inputEmail.length === 0 || inputEmail == null || inputEmail == undefined || !inputEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        throw new Error("O e-mail deve seguir o formato padrão.");
        } else if(inputSenha.length === 0 || inputSenha === null || inputSenha === undefined || !inputSenha.match(/^.{8,}$/)) {
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
            mostrarPopup('Atualizado com sucesso. Reentre.');
            window.location.href = 'entrar.html';
        })
        .catch((error) => {
            mostrarPopup(error.message);
        });
        }
    } catch (error) {
        mostrarPopup(error.message);
    }
}

const atualizarButton = document.getElementById('botao_enviar');

atualizarButton.addEventListener('click', (event) => {

    event.preventDefault();

    remover();
});