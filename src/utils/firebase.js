import firebase from 'firebase/app';
import 'firebase/database';

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