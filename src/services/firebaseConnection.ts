import firebase from 'firebase/app';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyDfoI-LAusBN6B0zo2eNHGn6ygFqlkPrL4",
    authDomain: "boardapp-b4733.firebaseapp.com",
    projectId: "boardapp-b4733",
    storageBucket: "boardapp-b4733.appspot.com",
    messagingSenderId: "1046732831219",
    appId: "1:1046732831219:web:fa734ae8f685eed442ba86",
    measurementId: "G-9L9F1YLKH8"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;