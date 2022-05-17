import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebasecd";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCJTHrepgRlsmehB7IRTcKM9MSKVeLL8_g",
    authDomain: "smart-room-7262e.firebaseapp.com",
    databaseURL: "https://smart-room-7262e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "smart-room-7262e",
    storageBucket: "smart-room-7262e.appspot.com",
    messagingSenderId: "997325611764",
    appId: "1:997325611764:web:7b9bf062cfb6a1809334a1",
    measurementId: "G-355X2MEGH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);  