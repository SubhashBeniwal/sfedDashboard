import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

let config = {
    apiKey: "AIzaSyCuqXEeiR2p7QhJYxeYWq-MsaF6yOlZCCM",
    authDomain: "sfedindia.firebaseapp.com",
    databaseURL: "https://sfedindia.firebaseio.com",
    projectId: "sfedindia",
    storageBucket: "sfedindia.appspot.com",
    messagingSenderId: "300571596721",
    appId: "1:300571596721:web:61fa81b04fb27d19b5cf90",
    measurementId: "G-2X2T26NLWX"
};

let configStage = {
    apiKey: "AIzaSyAU-ieuAYBOTobECIdooQeSc9_1ZjXV1-I",
    authDomain: "sfed-stage.firebaseapp.com",
    projectId: "sfed-stage",
    storageBucket: "sfed-stage.appspot.com",
    messagingSenderId: "63294560435",
    appId: "1:63294560435:web:3e411f0cc9cb56c1df78c6",
    measurementId: "G-0F9982J0YP"
};

firebase.initializeApp(configStage);

// export default firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();