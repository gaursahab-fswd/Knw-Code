import { FirebaseError, initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBg_8NOgNQfORiOtyyOPkaPlT50vFtphtQ",
    authDomain: "knwcode-4b8c9.firebaseapp.com",
    projectId: "knwcode-4b8c9",
    storageBucket: "knwcode-4b8c9.appspot.com",
    messagingSenderId: "625380708381",
    appId: "1:625380708381:web:8bac74a045025f4de2b6f4",
    measurementId: "G-RTE682ENT5"
  };

  const app =initializeApp(firebaseConfig); 

  export const auth = getAuth(app);

