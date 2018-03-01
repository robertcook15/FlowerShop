function initMap() {
    var uluru = { lat: 41.266851, lng: -111.965412 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: "Corprate Headquarters: Flower Shop"
    });
}