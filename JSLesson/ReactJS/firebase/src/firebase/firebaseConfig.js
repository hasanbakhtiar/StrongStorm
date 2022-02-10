import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
 
};

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export  {database as default, googleAuthProvider, firebase}