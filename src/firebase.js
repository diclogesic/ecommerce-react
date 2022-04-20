// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlwEalDeSz7itRIsuVqAI_FR-6quBnlTs",
    authDomain: "ecommerce-volcom.firebaseapp.com",
    projectId: "ecommerce-volcom",
    storageBucket: "ecommerce-volcom.appspot.com",
    messagingSenderId: "870353941716",
    appId: "1:870353941716:web:0f34ffda04d9f2fd003741"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db