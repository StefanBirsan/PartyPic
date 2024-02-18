import firebase from "firebase/compat";
import 'firebase/compat/storage';



const firebaseConfig = {
    apiKey: "AIzaSyCkLm3H6y-V6vS7jU8XC-nqtyqpHCcWBfQ",
    authDomain: "partypic-80f7f.firebaseapp.com",
    projectId: "partypic-80f7f",
    storageBucket: "partypic-80f7f.appspot.com",
    messagingSenderId: "200995720922",
    appId: "1:200995720922:web:5a58fe1ed88feac0f0dfe3",
    measurementId: "G-NQ9V1LFPWX"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };

