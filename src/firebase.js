import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUwtV-ys61EYunguUVIQXCEowHLbcZEW0",
  authDomain: "clone-app-96642.firebaseapp.com",
  projectId: "clone-app-96642",
  storageBucket: "clone-app-96642.firebasestorage.app",
  messagingSenderId: "116664492624",
  appId: "1:116664492624:web:77001a308f36e373a76755",
  measurementId: "G-BRBHCK25V4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };