import firebase from 'firebase'
require("@firebase/firestore")
//import "firebase/auth";

const firebaseConfig = {
 //Add configuration here
 <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.9.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB2FAFygIhDYpFZYkH3kFa-aUfv2Ctayv4",
    authDomain: "complaint-forum-ea20d.firebaseapp.com",
    projectId: "complaint-forum-ea20d",
    storageBucket: "complaint-forum-ea20d.appspot.com",
    messagingSenderId: "465993762938",
    appId: "1:465993762938:web:945fa7202fc1c4f31d53c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

