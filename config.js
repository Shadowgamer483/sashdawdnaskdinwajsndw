import firebase from "firebase"
require("@firebase/firestore")




var firebaseConfig = {
    apiKey: "AIzaSyDRZm7edQ28CDk6_bWMCpYyvfG2uRGi-IA",
    authDomain: "book-santa-f556d.firebaseapp.com",
    projectId: "book-santa-f556d",
    storageBucket: "book-santa-f556d.appspot.com",
    messagingSenderId: "48838199514",
    appId: "1:48838199514:web:a66f72f3fae7eeba0fbde3"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()
