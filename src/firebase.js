import firebase from 'firebase/compat/app';
import "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCiKjT0hwqnuM552oWXnkTHcf6gQekIVzc",
    authDomain: "disneyplus-clone-6600a.firebaseapp.com",
    projectId: "disneyplus-clone-6600a",
    storageBucket: "disneyplus-clone-6600a.appspot.com",
    messagingSenderId: "611085070223",
    appId: "1:611085070223:web:6ad040c993690bcb48a5fa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore;
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = Storage.firebaseApp;
  // const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;