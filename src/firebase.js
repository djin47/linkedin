// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore,initializeFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "linkedin-c25a0.firebaseapp.com",
  projectId: "linkedin-c25a0",
  storageBucket: "linkedin-c25a0.appspot.com",
  messagingSenderId: "595509154218",
  appId: "1:595509154218:web:54146d35d52638ffc49bd3",
  measurementId: "G-GYMQS4HN41"
};
console.log(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
