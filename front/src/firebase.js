import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDO05wIuABP7KQJOo3uuVUw1Dh5Ksj8hw8",
    authDomain: "finalproject-c5cc8.firebaseapp.com",
    projectId: "finalproject-c5cc8",
    storageBucket: "finalproject-c5cc8.appspot.com",
    messagingSenderId: "899082286057",
    appId: "1:899082286057:web:6b00bdb192ab5989741178",
    measurementId: "G-1RKX006GEG"
  };

  const app = initializeApp(firebaseConfig);

  export const storage = getStorage(app)



