
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyAaPhVWAW8L3G-lOsPwL1EO-rwgNYJ5OAo",
  authDomain: "crud-sa.firebaseapp.com",
  projectId: "crud-sa",
  storageBucket: "crud-sa.appspot.com",
  messagingSenderId: "91850176725",
  appId: "1:91850176725:web:fd95fb6e98db9c15550a5c",
  measurementId: "G-KPSQ91Z0WD"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export{auth , db}
