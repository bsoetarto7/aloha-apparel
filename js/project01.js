$(document).ready(function(){
  // Flickity carousel init and options
  $('#aloha-carousel-most-love').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    setGallerySize: false,
    prevNextButtons: false,
    groupCells: true,
    autoPlay:true
  });
  // The red notification on the add to cart button on the header will appear.
  var itemsInCart=1;
  $(".add-to-cart-btn").click(function(){
      $( ".items-in-cart" ).text(itemsInCart);
      $(".items-in-cart").removeClass("hide-item");
      itemsInCart++;
  });
  // Nav buttons that will scroll to to specific sections of the page
  var offsetTop = 100;
  // Check the window width and provide the proper offset from top when scrolling to 
  // specific section on load and when on resizing the screen.
  if(window.innerWidth<600){
    offsetTop = 150;
  }
  // Check the the window width when the window is resized and attach the appropriate offset from the
  // the top.
  window.addEventListener('resize', function () {
    if(window.innerWidth<600){
      offsetTop = 150;
    }else{
      offsetTop = 100;
    }
  });
  $("#nav-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#aloha-about").offset().top-offsetTop
    }, 1000);
  });
  $("#nav-shop").click(function() {
    $('html, body').animate({
        scrollTop: $("#aloha-categories").offset().top-offsetTop
    }, 1000);
  });
  $("#nav-featured").click(function() {
    $('html, body').animate({
        scrollTop: $("#aloha-featured").offset().top-offsetTop
    }, 1000);
  });
  $("#nav-updates").click(function() {
    $('html, body').animate({
        scrollTop: $("#aloha-updates").offset().top-offsetTop
    }, 1000);
  });
  // Email subscription success
  $("#email-subscription-btn").click(function(e){
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regex.test($("#email-subscription").val())){
      e.preventDefault();
      alert("Thanks for subscribing");
      $("#email-subscription").val("");
    }
  });
});