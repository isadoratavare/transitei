import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCmenyMHYNmeqB1pEN3-3-PBZWBKnMaTQo",
    authDomain: "transitei.firebaseapp.com",
    projectId: "transitei",
    storageBucket: "transitei.appspot.com",
    messagingSenderId: "29553690632",
    appId: "1:29553690632:web:523832ebc39a28a241e9bd",
    measurementId: "G-2Z9QZBCMN4"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)