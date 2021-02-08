import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhbCjjWiQAcv8Ncsb3W4j-SbVuAnQuPzA",
    authDomain: "crwn-db-7c0ca.firebaseapp.com",
    projectId: "crwn-db-7c0ca",
    storageBucket: "crwn-db-7c0ca.appspot.com",
    messagingSenderId: "200912258176",
    appId: "1:200912258176:web:4451e26686007bf6069265",
    measurementId: "G-4YQSJX9HZ3"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const  provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;