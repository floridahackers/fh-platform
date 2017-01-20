require('./components/shared');

$(document).ready(function() {
  $('#toc-wrap').sticky({
    topSpacing: 65  
  });  
  // $(window).on('scroll', function(){
  //   $('#toc').sticky();
  // });

  $('#toc').on('click', 'a', function(event){
    event.preventDefault();
    var target = $($(this).attr('href'));
    $('html, body').animate({
          scrollTop: target.offset().top - 78
    }, 500);
  });
  // $('a[href*="#"]').click(function() {
  //   var target = $(this.hash);
  //   console.log(target);
  //   target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
  //   if (target.length) {
  //     $('body').animate({
  //       scrollTop: target.offset().top - $('#header').offset().top 
  //     }, 1000);
  //     return false;
  //   }
  // });
});
