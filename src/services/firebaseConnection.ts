
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyBF4_tKcDAFfxSJ25npjLrakI_w9V1lHS8",
  authDomain: "dnv-fds.firebaseapp.com",
  projectId: "dnv-fds",
  storageBucket: "dnv-fds.appspot.com",
  messagingSenderId: "529368204933",
  appId: "1:529368204933:web:141b9643f6f03b62240bec",
  measurementId: "G-4M443NCT3C"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export{auth , db}
