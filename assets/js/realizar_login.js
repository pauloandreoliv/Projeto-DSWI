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

const inputCpf = '99999999999';
const inputSenha = '12345678';

onValue(databaseRef, (snapshot) => {
    
    const usuarios = snapshot.val();
    
    for (const usuario in usuarios) {

        const dadosUsuario = usuarios[usuario];
        const cpf = dadosUsuario.cpf;

        if (cpf === inputCpf) {
            const senha = dadosUsuario.senha;
            if (senha === inputSenha) {
                console.log("logado com sucesso");
            } else {
                console.log("senha incorreta");
            }
        } else {
            console.log("usuário inexistente");
        }
    }
  });