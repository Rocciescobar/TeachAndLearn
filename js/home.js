$(document).ready(function() {
  // Initialize collapse button
  $('.button-collapse').sideNav();
  $('.modal').modal();
  $('.fixed-action-btn').closeFAB();

  // Efecto loader en notificaciones
  setTimeout(function() {
    $('.charge').fadeOut('fast');
  }, 2000);

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
  var nameHome = $('.nameHome');
  var mailHome = $('#mailHome');
  var imgUser = $('.imgUser');
  var buttonPost = $('#buttonPost');
  var containerPosts = $('#containerPosts');

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
      mailHome.text(email);
      imgUser.attr('src', photoURL);

      // Creando posts 
      buttonPost.click(function() {
        var catchPost = $('#textarea1').val();
        containerPosts.prepend('<div class="col s12"><div class="card blue-grey darken-1"><div class="card-content white-text"><div class="row valign-wrapper"><div class="col s2"><img src="' + photoURL + '" alt="" class="circle responsive-img"></div><div class="col s10"><span class=" light-green-text"><strong id="namePosts">' + displayName + '</strong></span><p class="gray-text">' + moment().format('MMM Do YY') + ' a las ' + moment().format('hh:mm a') + '</p></div></div><p>' + catchPost + '</p></div><div class="card-action"><a href="#"><i class="material-icons  light-green-text">favorite_border</i></a><a href="#"><i class="material-icons  light-green-text">comment</i></a><a href="#"><i class="material-icons light-green-text">share</i></a></div></div></div>');
        $('#textarea1').val('');
      });      
    } else {
      // User is signed out.
      // ...
    }
  });

  // Cerrar sesión
  var btnLogout = $('.btnLogout'); // #btnLogout

  btnLogout.click(function() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      window.location.href = '../index.html';
    }).catch(function(error) {
      // An error happened.
    });
  });
});
