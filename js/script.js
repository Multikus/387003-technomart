var overlay = document.querySelector('.overlay');

if (document.querySelector('.modal-cart')) {
  var modalCart = document.querySelector('.modal-cart');
  var buttonCloseCart = modalCart.querySelector('.modal-close');
  var buttonCart = document.querySelectorAll('.buy');

  for (var i = 0; i < buttonCart.length; i++) {
    buttonCart[i].addEventListener('click', function (event) {
      event.preventDefault();
      overlay.classList.add('is-show');
      modalCart.classList.add('is-show');
    });
  };

  buttonCloseCart.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.remove('is-show');
    modalCart.classList.remove('is-show');
  });
}

if (document.querySelector('.modal-map') && document.querySelector('.modal-write-us')) {
  var modalMap = document.querySelector('.modal-map');
  var buttonMap = document.querySelector('.map-link');
  var modalFeedback = document.querySelector('.modal-write-us');
  var buttonFeedback = document.querySelector('.button-link');
  var buttonCloseMap = modalMap.querySelector('.modal-close');
  var buttonCloseFeedback = modalFeedback.querySelector('.modal-close');
  var form = document.querySelector('.write-us');
  var inputs = form.querySelectorAll('input');
  var textarea = form.querySelector('textarea');
  var buttonSubmit = form.querySelector('button[type=submit]');
  var counter = 0;

  buttonSubmit.addEventListener('click', function(event){
    event.preventDefault();
    for (var i = 0; i < inputs.length; i++){
      if (inputs[i].value == ''){
        counter++
      }
    }
    if (counter == inputs.length || textarea.value == ''){
      form.classList.add('error');
      setTimeout(function(){
        counter = 0;
        form.classList.remove('error');
      }, 10000);
    } else {
      form.submit();
    }
  });

  buttonFeedback.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.add('is-show');
    modalFeedback.classList.add('is-show');
  });

  buttonCloseFeedback.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.remove('is-show');
    modalFeedback.classList.remove('is-show');
  });

  buttonMap.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.add('is-show');
    modalMap.classList.add('is-show');
  });

  buttonCloseMap.addEventListener('click', function (event) {
    event.preventDefault();
    overlay.classList.remove('is-show');
    modalMap.classList.remove('is-show');
  });
}

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 27) {
    overlay.classList.remove('is-show');
    if (document.querySelectorAll('.modal').length > 0) {
      var modals = document.querySelectorAll('.modal');
      modals.forEach(function (elem, ndx) {
        elem.classList.remove('is-show');
      });
    };
  };
});
