
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'




const firebaseConfig = {
  apiKey: "AIzaSyBi0sDc2bW7MQ9R6lxkgL6BZwEE6-QiVXQ",
  authDomain: "post-its-66830.firebaseapp.com",
  projectId: "post-its-66830",
  storageBucket: "post-its-66830.appspot.com",
  messagingSenderId: "638140114441",
  appId: "1:638140114441:web:61e7c5bc8bfb69d088fad8",
  measurementId: "G-W1S7GQL2V6"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export{auth , db}
