import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { getDoc, setDoc, doc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from './firebaseConfig.js';

auth.onAuthStateChanged(user => {
    if (user) {
      console.log("user logged in");
      console.log(user);
      setupUI(user);
      var uid = user.uid;
      console.log(uid);
    } else {
      console.log("user logged out");
      setupUI();
    }
   });

class LoginModel {
    constructor() {
        this.user = null;
    }

    LoginUser(email, password) {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
                console.log(this.user);
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }
    

    logoutUser() {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out Succes
            })
            .catch((error) => {
                // Error occured
            });
    }
}

export default LoginModel;
