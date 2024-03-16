import firebase from "firebase/compat";
import 'firebase/compat/storage';
import { getDatabase } from 'firebase/database'



const firebaseConfig = {
    apiKey: "AIzaSyCEYJORuQb0eCrHRxaVDCiKt4bjLF9p6Qg",
    authDomain: "partypic2.firebaseapp.com",
    projectId: "partypic2",
    storageBucket: "partypic2.appspot.com",
    messagingSenderId: "342729303292",
    appId: "1:342729303292:web:4a86f20102ead2ee4da379",
    measurementId: "G-26FYRL466F",
    databaseURL : "https://partypic2-default-rtdb.europe-west1.firebasedatabase.app",
};


const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const db  = getDatabase( app );

export {auth, db, firebase};

