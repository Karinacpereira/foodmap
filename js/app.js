
$(document).ready(function() {
  $('.home').hide();
  $(document).ready(function() {
    $('.splashscreen').delay('2500').fadeOut('slow')
    $('.home').delay('2500').fadeIn('slow')
  });
  

  var map;
 
  function initialize() {
    var myLocation = new google.maps.LatLng(-23.5578203, -46.6644501);
     
    var options = {
      zoom: 16,
      center: myLocation,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var marker = new google.maps.Marker({
      position: myLocation,
      title: "Você Está aqui!",
      map: map,
  });
     
    map = new google.maps.Map(document.getElementById("map"), options, marker);
    }
     
    initialize();
  })

  