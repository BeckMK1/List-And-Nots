var firebaseConfig = {
    apiKey: "AIzaSyBVAPHJCk2Xya4cZoZcQCUJG495DpHYKyg",
    authDomain: "listandnotes-e9402.firebaseapp.com",
    databaseURL: "https://listandnotes-e9402.firebaseio.com",
    projectId: "listandnotes-e9402",
    storageBucket: "listandnotes-e9402.appspot.com",
    messagingSenderId: "127157202868",
    appId: "1:127157202868:web:aad41508fd9ebc11030ce1",
    measurementId: "G-1055D4QHM0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const _db = firebase.firestore();