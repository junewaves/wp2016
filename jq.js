
$(document).ready(function(){
  $(".text").slideUp();
  $(".about").mouseover(function(){
    $(".text").slideDown();
  });
  $(".about").mouseout(function(){
   $(".text").slideUp();
  });
});
