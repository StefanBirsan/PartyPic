import firebase from "firebase/compat";
import 'firebase/compat/storage';
import { getDatabase } from 'firebase/database'



const firebaseConfig = {
    apiKey: "AIzaSyCkLm3H6y-V6vS7jU8XC-nqtyqpHCcWBfQ",
    authDomain: "partypic-80f7f.firebaseapp.com",
    projectId: "partypic-80f7f",
    storageBucket: "partypic-80f7f.appspot.com",
    messagingSenderId: "200995720922",
    appId: "1:200995720922:web:5a58fe1ed88feac0f0dfe3",
    measurementId: "G-NQ9V1LFPWX",
    databaseURL : "https://partypic-80f7f-default-rtdb.europe-west1.firebasedatabase.app",
};


const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const db  = getDatabase( app );

export {auth, db, firebase};

