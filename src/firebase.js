// //MPPPPPPP For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAjcBCp29fxN0HSL00vwGSL8XVTBQIbVYI",
//   authDomain: "clone-28b1f.firebaseapp.com",
//   projectId: "clone-28b1f",
//   storageBucket: "clone-28b1f.appspot.com",
//   messagingSenderId: "445867470264",
//   appId: "1:445867470264:web:0b6f431a63af8c346fb34d",
//   measurementId: "G-N7GLQ4MPVV",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// BMMMMMMMYour web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqexEMS0Kt57n7WVlrJ6LZ6hUalSHrj4s",
  authDomain: "clone-21f04.firebaseapp.com",
  projectId: "clone-21f04",
  storageBucket: "clone-21f04.appspot.com",
  messagingSenderId: "343496055342",
  appId: "1:343496055342:web:26812b01d8501056ed5dbf",
  measurementId: "G-3XQTWM0VYN",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
