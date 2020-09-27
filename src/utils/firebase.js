import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID
};
firebase.initializeApp(firebaseConfig);

export function getAllUsers() {
  firebase.database().ref('usuarios/')
  .on('value', (dataSnapshot) => {
    console.log(dataSnapshot.val());
  });
}

export function newUser(usuario){
    firebase.database().ref('usuarios/')
    .push(usuario)
    .then(()=> {console.log('deu certo hih :)')})
    .catch((err)=>{console.log('deu errado poxa :(')})
}

export async function login() {
  //instancia do objeto provedor do google
  var provider = new firebase.auth.GoogleAuthProvider();

  //preferencia de idioma
  firebase.auth().languageCode = 'pt';

  //redireciona os usuários a uma pagina de login do google 
  await firebase.auth().signInWithRedirect(provider);

  //objeto de autenticação
  firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      var user = result.user;
      console.log(result.user)
    }).catch(function(error) {
      console.log(error.code)
      console.log(error.message)
      console.log(error.email)
      console.log(error.credential)
     
    });
}
