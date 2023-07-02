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

const dados = {
  nome: 'Exemplo',
  idade: 30,
  email: 'exemplo@email.com',
  telefone: 'texto',
  cpf: 'texto',
  endereco: 'texto',
  senha: 'texto'
};

const databaseRef = ref(database, 'usuarios');

push(databaseRef, dados)
  .then(() => {
    console.log('Inserção realizada com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao realizar a inserção:', error);
  });
