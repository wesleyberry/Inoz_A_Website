// Initialize and add the map
function initMap() {
    // The location of Uluru
    var position = {lat: 29.996620, lng: -98.096525};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 18, center: position});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: {
            lat: 29.996620,
            lng: -98.096525
        }, map:map
    });
}