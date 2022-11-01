import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnShJRZVr773Vxe2mJmPn6GIbm-0X8m3E",
  authDomain: "search-engine-22.firebaseapp.com",
  projectId: "search-engine-22",
  storageBucket: "search-engine-22.appspot.com",
  messagingSenderId: "739606572630",
  appId: "1:739606572630:web:5b32ae523bd2cfcd6bd5f7",
  measurementId: "G-1W0R4KPP0E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
