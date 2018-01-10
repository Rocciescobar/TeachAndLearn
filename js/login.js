$(document).ready(function() {
  // Sliders de intro a la app
  $('.slider').slider();
  $('.modal').modal();
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $('g-signin2').css('display', 'none');
  $('data').css('display', 'block');
  $('#pic').attr('src', profile, getImageUrl());
  $('#email').text(profile.getEmail());
}
