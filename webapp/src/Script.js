import React from 'react';
import { getDatabase, ref,  onValue } from "firebase/database";
import './firebaseConfig';

function Loop(){
const [hum, sethum] = React.useState("");
const [temp, settemp] = React.useState("");
const [projektor, setProjektor] = React.useState("");

const tempElement = document.getElementById("temp");
const humElement = document.getElementById("hum");
const presElement = document.getElementById("pres");

React.useEffect(function () {
 
  const db = getDatabase();
  const starCountRef = ref(db);
  onValue(starCountRef, (snapshot) => {
     const data = snapshot.val(); 
  sethum(data.dht11.hum)
  settemp(data.dht11.temp)
  setProjektor(data.projektor)
  });
  
} ,[]);
 
}
const setupUI = (user) => {
    if (user) {
  
      // get user UID to get data from database
      var uid = user.uid;
      console.log(uid);
  
      // Database paths (with user UID)
      var dbPathTemp = 'UsersData/' + uid.toString() + '/temperature';
      var dbPathHum = 'UsersData/' + uid.toString() + '/humidity';
      var dbPathPres = 'UsersData/' + uid.toString() + '/pressure';
  
      // Database references
      var dbRefTemp = firebase.database().ref().child(dbPathTemp);
      var dbRefHum = firebase.database().ref().child(dbPathHum);
      var dbRefPres = firebase.database().ref().child(dbPathPres);
  
      // Update page with new readings
      dbRefTemp.on('value', snap => {
        tempElement.innerText = snap.val().toFixed(2);
      });
  
      dbRefHum.on('value', snap => {
        humElement.innerText = snap.val().toFixed(2);
      });
  
      dbRefPres.on('value', snap => {
        presElement.innerText = snap.val().toFixed(2);
      });
  
    // if user is logged out
    } else{
      contentElement.style.display = 'none';
    }
  }
 
 export default Loop