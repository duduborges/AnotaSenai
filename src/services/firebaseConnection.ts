
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyAscKcp-c8LBnrLQ9_TSnRX4NcuV7s_MO4",
  authDomain: "reservasa-9c245.firebaseapp.com",
  projectId: "reservasa-9c245",
  storageBucket: "reservasa-9c245.appspot.com",
  messagingSenderId: "670223176255",
  appId: "1:670223176255:web:5bf6a2267936abc65e5e8a",
  measurementId: "G-Y102EV26F4"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export{auth , db}
