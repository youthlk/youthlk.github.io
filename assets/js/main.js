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