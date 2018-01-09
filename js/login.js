$(document).ready(function() {
  // Sliders de intro a la app
  $('.slider').slider();

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyAdfKIfUVywLMX1SkbPAu-T4naz2GMTSro',
    authDomain: 'teachandlearn-d4eb8.firebaseapp.com',
    databaseURL: 'https://teachandlearn-d4eb8.firebaseio.com',
    projectId: 'teachandlearn-d4eb8',
    storageBucket: '',
    messagingSenderId: '13064064731'
  };
  firebase.initializeApp(config);

  // Login con google
  var provider = new firebase.auth.GoogleAuthProvider();
  $('#login').click
  // firebase.auth().signInWithPopup(provider).then(function(result) {
});
