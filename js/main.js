(function($) {
    // open external links in a new tab/window
    $('a:not([href=""])').each(function() {
        if ($(this).attr('href')) {
            if ((this.hostname !== location.hostname) && (($(this).attr('href').substr(0, 7) == 'http://') || ($(this).attr('href').substr(0, 8) == 'https://'))) {
                $(this).on("click", function(e) {
                    e.preventDefault();
                    window.open($(this).attr('href'));
                });
            }
        }
    });

    // initialize Google Map
    var campusNorth = new google.maps.LatLng(54.9729457, -1.6082853);
    var map = new google.maps.Map(document.getElementById('location-map'), {
        center: campusNorth,
        disableDefaultUI: true,
        zoom: 16
    });
    var marker = new google.maps.Marker({
        map: map,
        position: campusNorth,
        title: 'Campus North'
    });
    var infowindow = new google.maps.InfoWindow({
        content: '<strong>Campus North</strong><br />' +
                 'Sunco House<br />' +
                 '5 Carliol Square<br />' +
                 'Newcastle upon Tyne<br />' +
                 'NE1 6UF'
    });
    
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
})(jQuery);
