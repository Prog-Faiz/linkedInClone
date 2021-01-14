import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyChXzhVB3k-JtPbmpclLCm6CUIP0_mn29w",
    authDomain: "linkedin-clone-9c101.firebaseapp.com",
    projectId: "linkedin-clone-9c101",
    storageBucket: "linkedin-clone-9c101.appspot.com",
    messagingSenderId: "1066594814051",
    appId: "1:1066594814051:web:fd1b035084f6c16e929056"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };