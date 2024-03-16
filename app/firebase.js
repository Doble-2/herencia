// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2bnq2E2q9vI8nKK9fx4DdAl0irlX3CaQ",
    authDomain: "nec-4bbf9.firebaseapp.com",
    projectId: "nec-4bbf9",
    storageBucket: "nec-4bbf9.appspot.com",
    messagingSenderId: "218865484372",
    appId: "1:218865484372:web:2018a00c3a320683e123c1",
    measurementId: "G-5YQV60DDJC"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
