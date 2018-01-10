containerPosts.prepend('<div id="posts" class="col s12"><div class="card blue-grey darken-1"><div class="card-content white-text"><div class="row valign-wrapper"><div class="col s2"><img src="../assets/images/usuario.png" alt="" class="circle responsive-img"></div><div class="col s10"><span class=" light-green-text"><strong id="namePosts">Paula Quiroz</strong></span><p class="gray-text">10/01/2017 a las 10:01 am</p></div></div><p>' + catchPost + '</p></div><div class="card-action"><a href="#"><i class="material-icons  light-green-text">favorite_border</i></a><a href="#"><i class="material-icons  light-green-text">comment</i></a><a href="#"><i class="material-icons light-green-text">share</i></a></div></div></div>');

buttonPost.addEventListener('click', function(event) {
  for (var i = 0; i < catchPost.value.length; i++) {
    if (catchPost.value[i] === ' ') {
      event.preventDefault();        
    } else {
      var textPost = document.createElement('p');
      textPost.textContent = catchPost.value;

      // Agregando formato  de hora
      textPost.innerHTML = catchPost.value + '<br>' + moment().format('hh:mm a');

      textPost.classList.add('posts');

      containerPosts.insertBefore(textPost, containerPosts.firstElementChild);

      catchPost.value = '';
      catchPost.focus();
      counter.textContent = 140;
      counter.className = 'text-color';
      catchPost.style.height = '66px';
    }
  }
});