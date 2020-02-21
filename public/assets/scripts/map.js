function initMap() {
    // Initializes map
    var position = {lat: 29.996620, lng: -98.096525};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 18, center: position});
    var marker = new google.maps.Marker({
        position: {
            lat: 29.996620,
            lng: -98.096525
        }, map:map
    });
}