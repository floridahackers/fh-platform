require('./components/shared');

$(document).ready(function() {
  $('#toc-wrap').sticky({
    topSpacing: 65  
  });  
  $('#toc').on('click', 'a', function(event){
    event.preventDefault();
    var target = $($(this).attr('href'));
    $('html, body').animate({
          scrollTop: target.offset().top - 78
    }, 500);
  });
});
