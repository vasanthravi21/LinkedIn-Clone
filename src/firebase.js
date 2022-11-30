import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8wdchJt-I1NFsJAFdw-9vLyEO7c-B0Ns",
    authDomain: "tutorial-c0c36.firebaseapp.com",
    projectId: "tutorial-c0c36",
    storageBucket: "tutorial-c0c36.appspot.com",
    messagingSenderId: "554269957288",
    appId: "1:554269957288:web:f1065d3b9c2e18a72eb69d"
  };


// const auth = getAuth(app);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// Get a list of cities from your database
// async function getCities(db) {
//   const usersCol = collection(db, 'users');
//   const userSnapshot = await getDocs(usersCol);
//   const userList = userSnapshot.docs.map(doc => doc.data());
//   return userList;
// }