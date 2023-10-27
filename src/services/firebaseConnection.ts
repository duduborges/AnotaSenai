
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCrG-IHp_7ZQjtH1yAv5Owa8qrtE-pZK_s",
  authDomain: "crud-dahora.firebaseapp.com",
  projectId: "crud-dahora",
  storageBucket: "crud-dahora.appspot.com",
  messagingSenderId: "974641949850",
  appId: "1:974641949850:web:5a2ff0e84481e66961c323",
  measurementId: "G-JV80N0SB0J"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

export{auth , db}
