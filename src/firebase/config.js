import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: "AIzaSyBiIc8Q9k_Xvhzt3TRx2txCX40J_tEo3Ks",
    authDomain: "react-curso-262c5.firebaseapp.com",
    projectId: "react-curso-262c5",
    storageBucket: "react-curso-262c5.appspot.com",
    messagingSenderId: "687821753307",
    appId: "1:687821753307:web:7bc4c6bfbf7219c81975fe",
    measurementId: "G-2WYFTWJYDN"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )