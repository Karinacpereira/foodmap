$(document).ready(function() {
  $('.home').hide();
  $('.splashscreen').delay('2500').fadeOut('slow')
  $('.home').delay('2500').fadeIn('slow')

  $(document).ready(function() {
    var map;
      function initMap() {
        var myLocation = new google.maps.LatLng(-23.5578203, -46.6644501);
     
        var options = {
          zoom: 16,
          center: myLocation,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var marker = new google.maps.Marker({
          position: myLocation,
          map: map
        });
     
        map = new google.maps.Map(document.getElementById("map"), options, marker);
      }
     
    initMap(restaurantes);

    for (var i of restaurantes) {
      var restaurantImage = i.image;
      var restaurantName = i.name;
      var restaurantResult = '<div class="d-flex flex-column justify-content-center" id=" ' + restaurantName + '"><h4 class="nameOfRestaurant align-self-center">' + restaurantName + '</h4><img class="restaurant-img" data-toggle="modal" data-target="#restaurantModal" src="' + restaurantImage + '" alt="">';
      // $('#name').html(restaurantName);
      // $('#image').html(`<img class='large-image' src="' + restaurantImage + '">`);
      // $('.description').html(restaurant.description);
      $(".restaurants").append(restaurantResult);
    };

    $('.arabe').click(function() {
      var filtered = restaurantes.filter(rest => rest.type === 'arabe');
      showResults(filtered);
    })
    $('.fast-food').click(function() {
      var filtered = restaurantes.filter(rest => rest.type === 'fast food');
      showResults(filtered);
    })
    $('.italiano').click(function() {
      var filtered = restaurantes.filter(rest => rest.type === 'italiana');
      showResults(filtered);
    })
    $('.vegano').click(function() {
      var filtered = restaurantes.filter(rest => rest.type === 'vegana');
      showResults(filtered);
    })
    $('.japones').click(function() {
      var filtered = restaurantes.filter(rest => rest.type === 'japonesa');
      showResults(filtered);
    })

    function showResults(restaurant){
      $('.restaurants').empty();
      restaurant.forEach(function(rest, index){
        $('.restaurants').append('<div class="d-flex flex-column justify-content-center" id=" ' + restaurantName + '"><h4 class="nameOfRestaurant align-self-center">' + restaurantName + '</h4><img class="restaurant-img" data-toggle="modal" data-target="#restaurantModal" src="' + restaurantImage + '" alt="">');
        $('#name').html(restaurantName);
        $('#image').html(`<img class='large-image' src="' + restaurantImage + '">`);
        $('.description').html(restaurant.description);
      })
    }

    $('.filter').click(function () {
  		var typedWord = $('.form-control').val();
	  	$('.restaurant-img').remove();
		  $('.nameOfRestaurant').remove();
    	for (var restaurante of restaurantes) {
		    if (typedWord === restaurante.type || typedWord === restaurante.name) {
				  var filtredName = restaurante.name;
    			var filtredImg = restaurante.image;
		    	var filtredResult = '<div id="' + filtredName + '" data-toggle="modal" data-target="#restaurantModal"><p class="name">' + filtredName + '</p><img class="restaurant-img" src="' + filtredImg + '" alt="" id="' + filtredName + '"></div>';
				  $(".restaurants").append(filtredResult);
			  }
		  }
	  });
  });
});