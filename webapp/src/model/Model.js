import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { getDoc, setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from './firebasecd.js';
class Model {
    constructor() {
        this.observers = [];
        this.humInfo = null;
        this.user = null;
        this.tempInfo = [
        ];
    }


    addObserver(callback) {
        this.observers = [...this.observers, callback];
    }
    removeObserver(callback) {
        this.observers = this.observers.filter(obs => obs !== callback);
    }
    notifyObservers() {
        this.observers.forEach(cb => {
            try { cb() } catch (e) { console.log(e) }
        });
    }

    LoginUser(email, password) {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
                this.getDataBaseInfo();
            })
            .catch
            ((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    }
    getDataBaseInfo() {
        const docRef = doc(db, "users", this.user.uid);
        (async () => {
            this.notifyObservers();
        })();
    }

    logoutUser() {
        const auth = getAuth();
        this.playlists = [];
        signOut(auth)
            .then(() => {
                // Sign-out Success
                this.user = null;
                this.notifyObservers();
            })
            .catch((error) => {
                // Error occured
            });
    }

}







export default Model;