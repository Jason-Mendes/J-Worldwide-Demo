import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyADaoejKzWRkgxdBlxPyaX-7BRvIIHiz9o",
  authDomain: "j-worldwide-crud-dbs.firebaseapp.com",
  databaseURL: "https://j-worldwide-crud-dbs-default-rtdb.firebaseio.com",
  projectId: "j-worldwide-crud-dbs",
  storageBucket: "j-worldwide-crud-dbs.appspot.com",
  messagingSenderId: "134569955674",
  appId: "1:134569955674:web:fa00bc3594280a3d266363"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();