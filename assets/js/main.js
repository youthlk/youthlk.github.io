// navcard showing
function showNavcard(id) {
  $('.nav-card').each(function(idx){$(this).addClass('hidden')}); 
  $(id).toggleClass('hidden');
  // navbar hiding on click/touch outside
  // $(document).mouseup(function (e)
  // {
  //     var container = $("#navcards");

  //     if (!container.is(e.target) // if the target of the click isn't the container...
  //         && container.has(e.target).length === 0) // ... nor a descendant of the container
  //     {
  //         // container.unbind( 'click', clickDocument ); 
  //         container.toggleClass('hidden');
  //     }
  // });
}

// navcard hiding on focus-loss
(function (){
  $('.nav-card').mouseleave(function() {
      $(this).toggleClass('hidden');
  });
  $('#navbars').mouseleave(function () {
    $('.nav-card').each(function(idx){
      $(this).addClass('hidden')
    }); 
  })
})();

// back-to-top 
jQuery(document).ready(function() {
  var offset = 250;
  var duration = 300;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });
   
  jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
});