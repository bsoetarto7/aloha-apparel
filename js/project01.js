$(document).ready(function(){
  var itemsInCart=1;
  $('#aloha-carousel-most-love').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    setGallerySize: false,
    prevNextButtons: false,
    groupCells: true
  });
  $(".add-to-cart-btn").click(function(){
      $( ".items-in-cart" ).text(itemsInCart);
      $(".items-in-cart").removeClass("hide-item");
      itemsInCart++;
  });
});