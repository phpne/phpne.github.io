(function($) {
    // open external links in a new tab/window
    $('a[rel^="external"]').on('click', function(e) {
        e.preventDefault();
        window.open(this.href);
    });
    
    // initialize Google Map
    var claveringHouse = new google.maps.LatLng(54.9682764, -1.6122045);
    var map = new google.maps.Map(document.getElementById('location-map'), {
        center: claveringHouse,
        disableDefaultUI: true,
        zoom: 18
    });
    var marker = new google.maps.Marker({
        map: map,
        position: claveringHouse,
        title: 'Clavering House'
    });
    var infowindow = new google.maps.InfoWindow({
        content: '<strong>Clavering House</strong><br />' +
                 'Clavering Place<br />' +
                 'Newcastle upon Tyne<br />' +
                 'NE1 3NG'
    });
    
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
})(jQuery);