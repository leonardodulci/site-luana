// Importar o módulo principal do Firebase
import firebase from "firebase/app";

// Importar os módulos específicos que você precisa
import "firebase/analytics";

// TODO: Adicione outros módulos do Firebase que deseja usar
// https://firebase.google.com/docs/web/setup#available-libraries

// Configuração do seu aplicativo Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdxJd-E4a2cL664EjazEwvD2dQPxT4EhM",
  authDomain: "siteluanagomes.firebaseapp.com",
  projectId: "siteluanagomes",
  storageBucket: "siteluanagomes.appspot.com",
  messagingSenderId: "314890403435",
  appId: "1:314890403435:web:841e179bd16d1c9b6fbb2e",
  measurementId: "G-LDQ3Q1TBQQ"
};

// Inicializar o Firebase
const app = firebase.initializeApp(firebaseConfig);

// Inicializar o Analytics (se necessário)
const analytics = firebase.analytics();

// Outros códigos relacionados ao Firebase podem ser adicionados aqui
