import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbBM6n7-gGLEhtkZJ-vUrLE8VhrznuCUQ",
    authDomain: "e-commerce-with-react-854f4.firebaseapp.com",
    projectId: "e-commerce-with-react-854f4",
    storageBucket: "e-commerce-with-react-854f4.appspot.com",
    messagingSenderId: "491595018947",
    appId: "1:491595018947:web:fe27b26089fdd5e8af6876",
    measurementId: "G-NHLKSDMME6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export {db, auth};