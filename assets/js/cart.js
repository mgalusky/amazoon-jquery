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

      var updateView = function(){
        // 1: Update the cart's total
        // 2: Hide/show the .empty h4 tags based on the total products in the car or the saved for later section
        var productsInCart = $('.cart .product');
        var productsSaved = $('.saved .product');

        if(productsInCart.length === 0) {
          // There are no products in the cart
          // Hide cart total
          $('.cart-total').hide();
          // Show H3 tag for cart empty
          $('.cart .empty').show();
          // Hide Item/Price header
          $('.headers').hide();
        } else {
          // There ARE products in the cart
          // Show cart total
          $('.cart-total').show();
          // Hide H3 tag for cart empty
          $('.cart .empty').hide();
        }

        if(productsSaved.length === 0){
          //There are no products in the saved for later section
          //Show H3 tag for saved for later empty
          $('.saved .empty').show();
          // $('.headers').hide();  

        } else {
          // There ARE products in teh saved for later section
          // Hide H3 tag for saved for later empty
          $('.saved .empty').hide();
        }
        var total = 0;
        $(productsInCart).each(function(){
          total += Number($(this).data('price'));
        });
        // console.log(total); update <span/> in cart total
        $('.cart-total span').text('$' + total);
      }

      var newItem = $(productTemplate);

      $(newItem).data('price', products[i].price);
      $('img', newItem).attr('src', products[i].imageSrc);
      $('.content h2', newItem).text(products[i].name);
      $('.content h2', newItem).append($('<span/>').addClass('manufacturer').text('by ' + products[i].manufacturer));
      $('h3', newItem).text(products[i].description);
      $('.mobile-price, .price', newItem).text('$' + products[i].price);

      $('.cart').append(newItem);
    }
      updateView();

      $('.move').on('click', function(){
        if ($(this).parents().eq(4).hasClass('cart')) {
          $('.saved').append($(this).parents().eq(3));
          $($(this)).text('Add to cart')
          updateView();
        } else {
          $('.cart').append($(this).parents().eq(3));
          $($(this)).text('Save for later');
          updateView();
        }
      });
  });
