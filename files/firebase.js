import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA1-fG7UJh2DGE1AbjDEaF5WPFZHphU9gE",
  authDomain: "movie-booking-app-373ac.firebaseapp.com",
  projectId: "movie-booking-app-373ac",
  storageBucket: "movie-booking-app-373ac.appspot.com",
  messagingSenderId: "899723380652",
  appId: "1:899723380652:web:9af7ba04dd2596ed671c09",
  measurementId: "G-X2NF38KLW2",
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export default fire;
