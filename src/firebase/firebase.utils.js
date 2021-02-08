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

export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef= firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot= await userRef.get();
   
    if(!snapShot.exists){
      const {displayName,email}= userAuth;
      const createdAt=new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
          console.log('error creating user', error.message);
      }  

    }
    
    return userRef;
}

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();
  const  provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;