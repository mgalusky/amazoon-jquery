$(document).ready(function(){
    var products = [
      {
        name: "Amazon Fire TV",
        manufacturer: "Amazoon",
        imageSrc: "assets/images/product01.jpg",
        description: "Eligible for free shipping and returns",
        price: 89.99
      },
      {
        name: "Amazon Fire",
        manufacturer: "Amazoon",
        imageSrc: "assets/images/product02.jpg",
        description: "Eligible for free shipping and returns",
        price: 69.00
      },
      {
        name: "Amazon Echo",
        manufacturer: "Amazoon",
        imageSrc: "assets/images/product03.jpg",
        description: "Eligible for free shipping and returns",
        price: 109.99
      }
    ];

    var productTemplate = $('template#product').html();

    for(var i = 0; i < products.length; i++){

      var newItem = $(productTemplate);

      $('img', newItem).attr('src', $(.text(products[i].imageSrc);
      $('.blue', newItem).text(products[i].name);
      $('.manufacturer', newItem).text(products[i].manufacturer);
      $('h3', newItem).text(products[i].description)
      $('.mobile-price', newItem).text(products[i].price);

      $('.products').append(newItem);
    }

      $('move').on('.submit', function(event) {
        $('.saved').append(this);
        if ('.cart-total h1.orange' === 'Save for later') {
          $('.cart-total h1.orange').text('Add to cart')
      } else $('.cart-total h1.orange').text('Save for later')
  });
