$(document).ready(function() {
  // Initialize collapse button
  $('.button-collapse').sideNav();
  $('.modal').modal();
  $('.fixed-action-btn').closeFAB();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  // $('.collapsible').collapsible();
});

window.addEventListener('load', function() {
  var catchPost = document.getElementById('catch-post');
  var button = document.getElementById('save-post');
  var containerPosts = document.getElementById('container-posts');
  var counter = document.querySelector('.counter');

  // Creando contador
  catchPost.addEventListener('keyup', function() {
    var postLength = catchPost.value.length;
    var characters = 140 - postLength;
    counter.textContent = characters;

    if (postLength < 120) {
      counter.className = 'text-color';
      button.disabled = false;
    } else if (postLength > 120 && postLength < 130) {
      counter.className = 'text-color-120';
      button.disabled = false;
    } else if (postLength > 130 && postLength < 140) {
      counter.className = 'text-color-130';
      button.disabled = false;
    } else if (postLength > 140) {
      counter.className = 'text-color';
      button.disabled = true;
    }
  });

  // Creando posts
  button.addEventListener('click', function(event) {
    for (var i = 0; i < catchPost.value.length; i++) {
      if (catchPost.value[i] === ' ') {
        event.preventDefault();
      } else {
        var post = document.createElement('p');
        post.textContent = catchPost.value;

        // Agregando formato  de hora
        post.innerHTML = catchPost.value + '<br>' + moment().format('hh:mm a');

        post.classList.add('posts');

        containerPosts.insertBefore(post, containerPosts.firstElementChild);

        catchPost.value = '';
        catchPost.focus();
        counter.textContent = 140;
        counter.className = 'text-color';
        catchPost.style.height = '66px';
      }
    }
  });

  // Textarea ajustable de acuerdo al tamaño del texto
  catchPost.addEventListener('keydown', function() {
    var keyboardEnter = this;
    setTimeout(function() {
      keyboardEnter.style.height = 'auto';
      keyboardEnter.style.height = keyboardEnter.scrollHeight + 'px';
    }, 0);
  });
});
