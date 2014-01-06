(function($) {
    // open external links in a new tab/window
    $('a:not([href=""])').each(function()
    {
        if($(this).attr("href")) {
            if ((this.hostname !== location.hostname) && (($(this).attr("href").substr(0, 7) == 'http://') || ($(this).attr("href").substr(0, 8) == 'https://')))
            {
                $(this).on("click", function()
                {
                    window.open($(this).attr("href"));
                    return false;
                });
            }
        }
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