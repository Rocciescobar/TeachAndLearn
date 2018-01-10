$(document).ready(function() {
  // Initialize collapse button
  $('.button-collapse').sideNav();
  $('.modal').modal();
  $('.fixed-action-btn').closeFAB();

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

  // Obteniendo información del usuario
  var nameHome = $('#nameHome');
  var nameProfile = $('#nameProfile');
  var mailHome = $('#mailHome');
  var imgUser = $('#imgUser');
  var imgUserProfile = $('#imgUserProfile');

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      nameHome.text(displayName);
      nameProfile.text(displayName);
      mailHome.text(email);
      imgUser.attr('src', photoURL);
      imgUserProfile.attr('src', photoURL);
    } else {
      // User is signed out.
      // ...
    }
  });

  // Cerrar sesión
  var btnLogout = $('#btnLogout');

  btnLogout.click(function() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      window.location.href = '../index.html';
    }).catch(function(error) {
      // An error happened.
    });
  });
});
