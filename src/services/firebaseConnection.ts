
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyCctiVYwf-s8bmRrQz8bQ1Svg7PAXwx92o",
  authDomain: "crudsa-e11fd.firebaseapp.com",
  projectId: "crudsa-e11fd",
  storageBucket: "crudsa-e11fd.appspot.com",
  messagingSenderId: "942199597367",
  appId: "1:942199597367:web:2e0b0c92a03760034ad2b2",
  measurementId: "G-55QT82WRSR"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export{auth , db}
