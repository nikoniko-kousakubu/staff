import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyB4QGqGiEYK0RinYuO7wRL5Y0dUbg3uC4o",
    authDomain: "staff-d1c5e.firebaseapp.com",
    projectId: "staff-d1c5e",
    storageBucket: "staff-d1c5e.firebasestorage.app",
    messagingSenderId: "426025479665",
    appId: "1:426025479665:web:cdb38a5640036aff18a850",
    measurementId: "G-DV9FLZSWVE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged, signInWithEmailAndPassword, signOut };
