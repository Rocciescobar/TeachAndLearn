$(document).ready(function() {
  // Sliders de intro a la app
  $('.slider').slider();

  // Modal de sign up y login
  $('.modal').modal();

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

  // Registrarse con email y password
  var btnSignUp = $('#btnSignUp');

  btnSignUp.click(function() {
    var email = $('#email').val();
    var password = $('#password').val();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  });

  // Login con email y password
  var btnLogin = $('#btnLogin');

  btnLogin.click(function() {
    var email2 = $('#email2').val();
    var password2 = $('#password2').val();

    firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
      // ...
    });
  });

  // function observer() {
  // firebase.auth().onAuthStateChanged(function(user) {
  // if (user) {
  // User is signed in.
  // var displayName = user.displayName;
  // var email = user.email;
  // var emailVerified = user.emailVerified;
  // var photoURL = user.photoURL;
  // var isAnonymous = user.isAnonymous;
  // var uid = user.uid;
  // var providerData = user.providerData;        
  // } else {
  // User is signed out.
  // ...
  // }
  // });    
  // };  
  // observer();

  // Login con google
  var providerGoogle = new firebase.auth.GoogleAuthProvider();
  $('#login-gmail').click(function() {
    firebase.auth().signInWithPopup(providerGoogle).then(function(result) {
      saveData(result.user);
      console.log(result.user);
      window.location.href = '../views/home.html';
    });
  });

  // Login con facebook
  var providerFaceb = new firebase.auth.FacebookAuthProvider();
  $('#login-facebook').click(function() {
    firebase.auth().signInWithPopup(providerFaceb).then(function(result) {
      saveData(result.user);
      console.log(result.user);
      window.location.href = '../views/home.html';
    });
  });
  
  // Función para guardar datos de los usuarios
  function saveData(user) {
    var user = {
      uid: user.uid,
      nombre: user.displayName,
      email: user.email,
      foto: user.photoURL
    };
    firebase.database().ref('datapp').push(user);
  };
});
